document.addEventListener('DOMContentLoaded', function () { 

    document.querySelectorAll('.like-container').forEach(container => {
      const icon = container.querySelector('.like-icon');
      const count = container.querySelector('.like-count');

      let liked = false;

      icon.addEventListener('click', function () {
        let value = Number(count.textContent);

        if (!liked) {
          count.textContent = value + 1;
          icon.classList.add('liked');
          icon.classList.replace('bi-heart', 'bi-heart-fill');
        } else {
          count.textContent = value - 1;
          icon.classList.remove('liked');
          icon.classList.replace('bi-heart-fill', 'bi-heart');
        }
        liked = !liked;
      });
    });

  });