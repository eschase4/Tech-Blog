const submitBtn = document.querySelector('#submitBtn');

const handleSubmit = (e) => {
  e.preventDefault();
  const postObj = {
    text: document.querySelector('#textArea').value.trim(),
    title: document.querySelector('#textArea').value.trim(),
  };
  fetch('/api/newpost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postObj),
  });
};

submitBtn.addEventListener('click', handleSubmit);
