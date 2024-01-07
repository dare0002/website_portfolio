 $(document).ready(function () {
            var overlay = document.getElementById('overlay');
            var carousel = $('.carousel').carousel({
                onCycleTo: function (el) {
                    var title = el.getAttribute('data-title');
                    var description = el.getAttribute('data-description');
                    updateOverlay(title, description);
                }
            });

            function updateOverlay(title, description) {
                overlay.querySelector('h2').textContent = title;
                overlay.querySelector('p').textContent = description;
            }

            $('.carousel-item').click(function () {
                var title = this.getAttribute('data-title');
                var description = this.getAttribute('data-description');
                updateOverlay(title, description);
                // Visa overlay när man klickar på en bild
                overlay.style.display = 'block';
            });
        });


