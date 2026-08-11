<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

$type = $_GET['type'] ?? '';

$configs = [
    'gallery' => [
        'directory' => __DIR__ . '/media/galerie',
        'publicPath' => 'media/galerie',
        'extensions' => ['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif'],
        'meta' => 'Galerie',
    ],
    'radio' => [
        'directory' => __DIR__ . '/media/Radio',
        'publicPath' => 'media/Radio',
        'extensions' => ['mp3', 'm4a', 'wav', 'ogg'],
        'meta' => 'Radio-Beitrag',
    ],
];

if (!isset($configs[$type])) {
    http_response_code(400);
    echo json_encode(['error' => 'Unknown media type'], JSON_UNESCAPED_UNICODE);
    exit;
}

$config = $configs[$type];
$directory = $config['directory'];

if (!is_dir($directory) || !is_readable($directory)) {
    echo json_encode([], JSON_UNESCAPED_UNICODE);
    exit;
}

$formatTitle = static function (string $name): string {
    $compactName = preg_replace('/[^a-z0-9]/', '', strtolower($name)) ?? strtolower($name);
    if (str_contains($compactName, 'fraulebenfreiheitdierevolutionimiran')) {
        return 'Frau, Leben, Freiheit: Die Revolution im Iran';
    }

    $name = str_replace(['_', '-'], ' ', $name);
    $name = preg_replace('/\s+/', ' ', $name) ?? $name;
    $name = trim($name);
    if (function_exists('mb_convert_case')) {
        $title = mb_convert_case($name, MB_CASE_TITLE, 'UTF-8');
    } else {
        $title = ucwords($name);
    }

    return strtr($title, [
        'Muenchen' => 'München',
        'Saenger' => 'Sänger',
        'Gefluechteter' => 'Geflüchteter',
        'Bundespraesidenten' => 'Bundespräsidenten',
        'Ueber' => 'Über',
        '1Live' => '1LIVE',
        'Wdr' => 'WDR',
        'Cosmo' => 'COSMO',
    ]);
};

$getParts = static function (string $file): array {
    $name = pathinfo($file, PATHINFO_FILENAME);
    $name = preg_replace('/^\d+[\s_-]+/', '', $name) ?? $name;
    $parts = explode('--', $name, 2);

    return [
        'title' => $parts[0],
        'source' => $parts[1] ?? '',
    ];
};

$files = array_values(array_filter(scandir($directory) ?: [], static function (string $file) use ($directory, $config): bool {
    if ($file === '' || $file[0] === '.') {
        return false;
    }

    $path = $directory . '/' . $file;
    if (!is_file($path)) {
        return false;
    }

    $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));
    return in_array($extension, $config['extensions'], true);
}));

natcasesort($files);

$items = array_map(static function (string $file) use ($config, $formatTitle, $getParts): array {
    $parts = $getParts($file);
    $meta = $parts['source'] !== '' ? $formatTitle($parts['source']) : $config['meta'];

    return [
        'file' => $file,
        'title' => $formatTitle($parts['title']),
        'meta' => $meta,
        'url' => './' . $config['publicPath'] . '/' . rawurlencode($file),
    ];
}, array_values($files));

echo json_encode($items, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
