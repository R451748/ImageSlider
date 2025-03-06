document.addEventListener("DOMContentLoaded", () => {
    const imageUrls = [
        "https://th.bing.com/th/id/R.2816a47db68dec4624385db0300d3d5e?rik=F%2b%2f%2b4XaPHNMj4A&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Download-Best-HD-Nature-Photos.jpg&ehk=S19nbap6FGFGErVnU5MX7ZZ4Cmo2WD4uCYBH8YmJkt4%3d&risl=&pid=ImgRaw&r=0",
        "https://wallpaperaccess.com/full/284553.jpg",
        "https://images.hdqwalls.com/wallpapers/nature-hd-sd.jpg",
        "https://th.bing.com/th/id/R.ae3d2f4880eaca12be7c84e2d2c56041?rik=KeMl0VTdSYUt2g&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2f1%2f9%2f355093.jpg&ehk=oGlwjQgO%2fFGGKmJsbxLKvu%2bk2XY18CIw6bAAeo6QVPw%3d&risl=&pid=ImgRaw&r=0"

    ];
    
    const slider = document.getElementById("slider");
    const img = document.createElement("img");
    img.src = imageUrls[0];
    slider.appendChild(img);
    
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttons";
    
    const prevButton = document.createElement("button");
    prevButton.innerHTML = "&#10094; Prev";
    
    const nextButton = document.createElement("button");
    nextButton.innerHTML = "Next &#10095;";
    
    buttonsDiv.appendChild(prevButton);
    buttonsDiv.appendChild(nextButton);
    slider.appendChild(buttonsDiv);
    
    let currentIndex = 0;
    
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        img.src = imageUrls[currentIndex];
    });
    
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
        img.src = imageUrls[currentIndex];
    });
});
