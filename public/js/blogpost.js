const submitBtn = document.querySelector('#submitBtn');

const handleSubmit = async (e) => {
  e.preventDefault();
  const postObj = {
    title: document.querySelector('#title').value,
    text: document.querySelector('#textArea').value,
  };

  try {
    const respnse = await fetch('/api/newpost', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postObj),
    });
    if (respnse.ok) {
      window.location.href = '/home';
    } else {
      console.error('Failed to create post');
    }
  } catch (err) {
    console.error(err);
  }
};

submitBtn.addEventListener('click', handleSubmit);
