document.addEventListener('DOMContentLoaded',()=>{

    const member = document.getElementById('member')
    const search = document.querySelector('.search')
    const loader = document.getElementById('loader')
    const warn = document.querySelector(".warning")
    const twoin = document.getElementById('twoina')
    
    // const roles = ['hidden1', 'hidden2', 'hidden3','hidde4','hidden5'];
    // roles.forEach(role => {
    //     const card = document.querySelector(`.card.${role}`);
    //     console.log(card); // one per role
    // });

    let card1 = document.getElementById('member-info1')
    let card2 = document.getElementById('member-info2')
    let card3 = document.getElementById('member-info3')
    let card4 = document.getElementById('member-info4')
    let card5 = document.getElementById('member-info5');

    [card1, card2, card3, card4, card5].forEach(mrmem => {
            mrmem.style.visibility = 'hidden';
        });

    function showmember(val){
        [card1, card2, card3, card4, card5].forEach(mrmem => {
            warn.textContent = `Please choose valid member`
            mrmem.style.visibility = 'hidden';
        });
        if(val == 0){
            warn.style.visibility = 'visible';
            twoin.style.visibility = 'hidden';
            return;
        }
          twoin.style.visibility = 'visible';
        // console.log({val})

        if(val == 1){
            console.log("hii")
            card1.style.visibility = 'visible';
            warn.textContent = `Ohh!! we found Anuj `
            warn.style.visibility = 'visible';
            return;
        }
        if(val == 2){
            card2.style.visibility = 'visible';
            warn.textContent = `Ohh!! we found Mohit `
            warn.style.visibility = 'visible';
            return;
        }
        if(val == 3){
            card3.style.visibility = 'visible';
            warn.textContent = `Ohh!! we found OM `
            warn.style.visibility = 'visible';
            return;
        }
        if(val == 4){
            card4.style.visibility = 'visible';
            warn.textContent = `Ohh!! we found Suyash`
            warn.style.visibility = 'visible';
            return;
        }
        if(val == 5){
            card5.style.visibility = 'visible';
            warn.textContent = `Ohh!! we found Vishal `
            warn.style.visibility = 'visible';
            return;
        }

    }


    function loadcss(){
        loader.style.border = '4px solid #f3f3f3';
        loader.style.borderTop = '4px solid #3498db';
        loader.style.borderRadius = '50%';
        loader.style.width ='24px';
        loader.style.height = '24px';
        loader.style.margin = '10px auto';
        loader.style.visibility = 'hidden';
        loader.style.animation = 'spin 1s linear infinite';
        
        if (!document.getElementById('spin-keyframes')) {
            const style = document.createElement('style');
            style.id = 'spin-keyframes';
            style.textContent = `
                @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }

    }loadcss();


    search.addEventListener('click', () => {

        // Show immediately
        loader.style.visibility = 'visible';
        warn.style.visibility = 'hidden';
        // Simulate loading (2 sec)
        setTimeout(() => {
            loader.style.visibility = 'hidden';
            // You can also show results here
            function memberfetch(){
                const val = member.value;
                showmember(val);
            }memberfetch();
        }, 2000);

        

    });

})