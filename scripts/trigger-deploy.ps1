$ErrorActionPreference = 'Stop'
# Trigger workflow dispatch via GitHub API
$token = $env:GITHUB_TOKEN
if (-not $token) {
  Write-Host "No GITHUB_TOKEN found, trying without auth"
  $token = ""
}
$auth = "Bearer $token"
$headers = @{
  'Authorization' = $auth
  'Accept' = 'application/vnd.github.v3+json'
  'X-GitHub-Api-Version' = '2022-11-28'
}
try {
  $r = Invoke-RestMethod -Uri 'https://api.github.com/repos/flier3186/quiqu-xueyuan/actions/workflows/deploy.yml/dispatches' -Method Post -Headers $headers -ContentType 'application/json' -Body '{"ref":"346a54e"}'
  Write-Host "Triggered: $($r.message)"
} catch {
  Write-Host "Trigger error: $($_.Exception.Message)"
  # Try without token
  try {
    $r2 = Invoke-RestMethod -Uri 'https://api.github.com/repos/flier3186/quiqu-xueyuan/actions/workflows/deploy.yml/dispatches' -Method Post -ContentType 'application/json' -Body '{"ref":"346a54e"}'
    Write-Host "Triggered (no auth): $($r2.message)"
  } catch {
    Write-Host "Failed without auth too: $($_.Exception.Message)"
  }
}
