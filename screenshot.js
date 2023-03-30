const screenshotButton = document.querySelector('#screenshotButton');
      const screenshotImage = document.querySelector('#screenshotImage');

      screenshotButton.addEventListener('click', () => {
        const canvas = document.querySelector('canvas');
        const dataURL = canvas.toDataURL('image/png');
        screenshotImage.src = dataURL;
    });