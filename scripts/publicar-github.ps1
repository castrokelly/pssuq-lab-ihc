# Creates a PUBLIC code repository. Does not publish participant data.
[CmdletBinding()]
param([string]$RepositoryName = "pssuq-lab-ihc")
$ErrorActionPreference = "Stop"
if ($RepositoryName -notmatch '^[A-Za-z0-9_.-]+$') { throw "Nome de repositório inválido." }
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  throw "Instale GitHub CLI de https://cli.github.com/ e execute gh auth login."
}
$projectRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
Push-Location -LiteralPath $projectRoot
try {
  & gh auth status
  if ($LASTEXITCODE -ne 0) { throw "Execute gh auth login antes da publicação." }
  & git rev-parse --verify HEAD 2>$null | Out-Null
  if ($LASTEXITCODE -ne 0) { throw "Faça o primeiro commit local antes de publicar." }
  $pending = & git status --porcelain
  if ($pending) { throw "Revise e faça commit das mudanças antes de publicar." }
  $origin = & git remote get-url origin 2>$null
  if ($LASTEXITCODE -eq 0) { throw "Já existe origin ($origin). Confira manualmente; nada foi sobrescrito." }
  $login = & gh api user --jq '.login'
  if ($LASTEXITCODE -ne 0 -or -not $login) { throw "Não foi possível verificar a conta GitHub." }
  $repoPath = "$login/$RepositoryName"
  & gh repo view $repoPath --json name 2>$null | Out-Null
  if ($LASTEXITCODE -eq 0) { throw "O repositório $repoPath já existe. Não será alterado por este script." }
  & gh repo create $repoPath --public --source . --remote origin --push --description "Projeto IHC: gestão e análise de estudos com PSSUQ v3 — Andrey, Gotardo e Kelly"
  if ($LASTEXITCODE -ne 0) { throw "Falha na criação/publicação. Confira o estado no GitHub antes de repetir." }
  & gh repo view $repoPath --json url --jq '.url'
  & git ls-remote origin refs/heads/main
  if ($LASTEXITCODE -ne 0) { throw "Repositório criado, mas verificação remota falhou." }
} finally {
  Pop-Location
}
