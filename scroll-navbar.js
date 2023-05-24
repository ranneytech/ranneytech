window.addEventListener('scroll', function() {
            var header = document.querySelector('#header');
            if (window.scrollY > header.offsetHeight) {
                document.querySelector('nav').style.backgroundColor = 'rgba(38, 38, 38, 0.8)';
            } else {
                document.querySelector('nav').style.backgroundColor = 'transparent';
            }
        });