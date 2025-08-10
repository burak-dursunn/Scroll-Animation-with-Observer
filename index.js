for(let i = 1; i <= 20; i++) {
    const item = document.createElement('div');
    item.className = 'item';
    item.textContent = i;
    document.body.appendChild(item);
}

// Intersection Observer to detect when items are in view
const observer = new IntersectionObserver(entries => {
    entries.forEach((entry,index) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.style.transitionDelay = `${(index % 10) * 0.1}s`;
            console.log(`Item ${entry.target.textContent} is in view`);
        }
        else {
            entry.target.classList.remove('show');
            entry.target.style.transitionDelay = '0s';
        }
    })
}, { threshold: 0.1 });

const items = document.querySelectorAll('.item');
items.forEach(el => observer.observe(el));