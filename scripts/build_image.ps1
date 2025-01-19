$rootDir = (Get-Location).Path
if (-not (Test-Path "$rootDir/deployments/drogon.Dockerfile")) {
    Write-Error "Please run this script from the root of the repository."
    exit 1
}

$imageName = "drogon:v0.1"
$repository = "docker.io/arvaliullin/$imageName"
podman build -t $imageName -f deployments/drogon.Dockerfile .
podman tag $imageName $repository
podman push $repository
