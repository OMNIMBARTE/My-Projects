document.addEventListener('DOMContentLoaded', () => {

    const submit = document.getElementById('sub-btn');
    const inner1 = document.getElementById('inner1');

    const name = document.getElementById('person');
    const year = document.getElementById('year');
    const branch = document.getElementById('branch');
    const mail = document.getElementById('mail');
    const skills = document.getElementById('skill')
    const validmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net)$/;
    const container = document.querySelector('.container');
    const outcontainer = document.getElementById('outcontainer');
    


    function validform() {
        if (name.value.trim() === '') {
            alert('Please enter your name');
            return 0;
        }
        if (!((year.value === '1') || (year.value === '2') || (year.value === '3') || (year.value === '4'))) {
            alert('Please choose your year');
            return 0;
        }
        if (!((branch.value == 1) || (branch.value == 2))) {
            alert('Please choose your branch');
            return 0;
        }
        if (mail.value.trim() === '') {
            alert('Please enter your email');
            return 0;
        }
        if (!validmail.test(mail.value.trim())) {
            alert('Please enter a valid email');
            return 0;
        }

        return 1;
    }

    submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (validform()) {
        inner1.style.display = 'none';

        const finalmsg = document.createElement('div');
        finalmsg.id = 'final';

        const finalsticker = document.createElement('div');
        finalsticker.id = 'finalstick';
        finalsticker.textContent = '🥳';

        const finaltext = document.createElement('div');
        finaltext.id = 'finaltext';
        finaltext.textContent = 'You have submitted the form';

        // ✅ Card containing submitted details
        const selectedYear = year.options[year.selectedIndex].text;
        const selectedBranch = branch.options[branch.selectedIndex].text;
        const card = document.createElement('div');
        card.className = 'submitted-card';
        card.innerHTML = `
            <p><strong>Name:</strong> ${name.value}</p>
            <p><strong>Year:</strong> ${selectedYear}</p>
            <p><strong>Branch:</strong> ${selectedBranch}</p>
            <p><strong>Email:</strong> ${mail.value}</p>
            <p><strong>Skills:</strong> ${skills ? skills.value : 'N/A'}</p>

        `;

        // ✅ Button with a tag style
        const button = document.createElement('a');
        button.href = '/File1';
        button.textContent = 'Back to Home';
        button.className = 'action-link';

        // Styles
        Object.assign(finalmsg.style, {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            padding: '20px',
            fontSize: '2rem',
            color:'#fff',
        });

        Object.assign(card.style, {
            backgroundColor: '#ffffffff',
            color: 'white',
            padding: '15px 25px',
            borderRadius: '10px',
            color:'#000',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            textAlign: 'left',
            minWidth: '300px',
        });

        Object.assign(button.style, {
            marginTop: '10px',
            backgroundColor: '#00bcd4',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
        });

        // Append all
        finalmsg.appendChild(finalsticker);
        finalmsg.appendChild(finaltext);
        finalmsg.appendChild(card);
        finalmsg.appendChild(button);

        outcontainer.appendChild(finalmsg);
    }
});


});
