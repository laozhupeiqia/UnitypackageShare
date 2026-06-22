function downloadPackage(url, filename) {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function renderPackages() {
    const grid = document.getElementById("package-grid");

    packages.forEach((pkg) => {
        const card = document.createElement("div");
        card.className = "package-card";

        card.innerHTML = `
            <div class="image-wrapper">
                <img src="${pkg.image}" alt="${pkg.name}" loading="lazy" />
            </div>
            <div class="info">
                <span class="name" data-file="${pkg.file}" data-name="${pkg.name}">${pkg.name}</span>
            </div>
        `;

        card.querySelector(".name").addEventListener("click", (e) => {
            const file = e.target.dataset.file;
            const realName = file.split("/").pop();
            downloadPackage(file, realName);
        });

        grid.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderPackages);
