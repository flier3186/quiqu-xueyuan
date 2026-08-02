$ErrorActionPreference = 'Stop'
$c = (Invoke-WebRequest -Uri 'https://flier3186.github.io/quiqu-xueyuan/index.html' -UseBasicParsing).Content
Write-Host "hasSceneBanner: $($c.Contains('engSceneBanner'))"
Write-Host "hasReviewReminder: $($c.Contains('reviewReminder'))"
Write-Host "hasAchievementWall: $($c.Contains('achievementWall'))"
Write-Host "hasSW: $($c.Contains('serviceWorker'))"
Write-Host "hasSceneAudio: $($c.Contains('playEngSceneAudio'))"
Write-Host "Total length: $($c.Length)"
