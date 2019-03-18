window.onload = () => {
    document.querySelectorAll('.gallery').forEach(div => {
        div.querySelectorAll('img').forEach(img => {
            img.onclick = () => {
            // Get the modal
                let modal = document.querySelector('#myModal')
                let modalImg = document.querySelector("#modal-content");
                let controls = document.querySelector('#controls').childNodes;
                let node = img;
                
                // Showing Image
                modal.style.display = "block";
                modalImg.src = img.src;
                
                // Adding functinality to control
                controls[0].onclick = () => {
                    if(node.previousElementSibling){
                        modalImg.src = node.previousElementSibling.src;
                        node = node.previousElementSibling;
                    }
                }
                controls[1].onclick = () => {
                    if(node.nextElementSibling){
                        modalImg.src = node.nextElementSibling.src;
                        node = node.nextElementSibling;
                    }
                    
                }
                // Get the <span> element that closes the modal
                document.querySelector('#close').onclick = () => {
                    modal.style.display = "none";
                };
            }
        });
    });
}