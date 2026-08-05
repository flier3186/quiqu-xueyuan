# Fix encoding for math-data-7a.js and math-data-7b.js
# Read the current content and re-write with UTF-8 without BOM

$files = @(
    "f:\qiquleyuan\quiqu-xueyuan-master\quiqu-xueyuan-master\data\math-data-7a.js",
    "f:\qiquleyuan\quiqu-xueyuan-master\quiqu-xueyuan-master\data\math-data-7b.js"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        # Remove BOM if present
        if ($content[0] -eq "`uFEFF") {
            $content = $content.Substring(1)
        }
        # Write back with UTF-8 without BOM
        $utf8NoBom = New-Object System.Text.UTF8Encoding $false
        [System.IO.File]::WriteAllText($file, $content, $utf8NoBom)
        Write-Host "Fixed: $file"
    }
}

Write-Host "Done"
