# Delusional Club Backup Script
# Run this before making major changes

param(
    [string]$Description = "Manual backup"
)

$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$backupName = "backup_$timestamp"
$backupPath = ".\backups\$backupName"

Write-Host "Creating backup: $backupName" -ForegroundColor Cyan
Write-Host "Description: $Description" -ForegroundColor Yellow

# Create backup directory
New-Item -ItemType Directory -Path $backupPath -Force | Out-Null

# Copy project files (excluding node_modules, .next, and other large dirs)
$itemsToCopy = @(
    "app",
    "components", 
    "public",
    "*.json",
    "*.js",
    "*.ts",
    "*.tsx",
    "*.css",
    "*.md",
    "*.mjs",
    ".gitignore"
)

foreach ($item in $itemsToCopy) {
    if (Test-Path $item) {
        Copy-Item -Path $item -Destination $backupPath -Recurse -Force
        Write-Host "Copied: $item" -ForegroundColor Green
    }
}

# Create backup info file
$backupInfo = @"
Backup created: $timestamp
Description: $Description
Git branch: $(git branch --show-current 2>$null)
Git commit: $(git rev-parse HEAD 2>$null)
"@

$backupInfo | Out-File -FilePath "$backupPath\backup_info.txt" -Encoding UTF8

Write-Host "Backup completed successfully at: $backupPath" -ForegroundColor Green
Write-Host "To restore this backup, copy files from $backupPath back to project root" -ForegroundColor Yellow 