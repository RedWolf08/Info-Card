const body = document.querySelector('body');

document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const gridSize = 45; 

    for (let x = 0; x < window.innerWidth; x += gridSize) {
        for (let y = 0; y < window.innerHeight; y += gridSize) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.style.position = 'absolute';
            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
            dot.style.width = '3px';
            dot.style.height = '3px';
            body.appendChild(dot);
        }
    }
    const buttons = document.querySelectorAll('.Button-Main');
    const infoContent = document.getElementById('info-content');
    const infoPanel = document.querySelector('.Info-Panel');

    const content = {
        'personality': `
                <section>
                    <h2 class="Text-Before-Main">Personality</h2>
                    <ul class="Text-Ul_Decor">
                        <li>Pretty silent personality, enjoying a quiet life.</li>
                        <li>Traits: Irritable, Sullen, Sensible, Sarcastic, Analytical, Stubborn, Perfectionist, Skeptical, Caring, Introverted.</li>
                        <li>Always striving for the best.</li>
                        <li>Interested in philosophical questions.</li>
                        <li>Enjoys listening to people talk about various topics.</li>
                    </ul>
                </section>
        `,
        'technical-skills': `
            <section>
                <h2 class="Text-Before-Main">Technical Skills</h2>
                <ul class="Text-Ul_Decor">
                    <li>--Intermediate level programmer</li>
                    <li>Languages I know: <strong>C++, C#, JavaScript, TypeScript, Python, Lua</strong></li>
                    <li>Mapper in Source Engine and familiar with its internals</li>
                    <li>Passionate about learning new technologies and improving my skills</li>
                </ul>
            </section>        `,
        'gallery': `
            <H1 style="color: rgb(226, 155, 49); font-size: 40px; text-align: center; text-shadow: 0 0 15px rgba($color: rgb(226, 155, 49), $alpha: 1); 
 ">¡NOTHING HERE FOR NOW!</H1>
        `,
        'favorite-quotes': `
            <section>
                <h2 class="Text-Before-Main">Favorite Quotes</h2>
                <ul class="Text-Ul_Decor">
                    <li>
                        <blockquote>
                            "Are you more rational? Emotions? Listen to your mind or your heart? There's no right answer. 
                            Sometimes one is better, sometimes the other. Let me give you one piece of advice. First of all, be true to yourself."
                        </blockquote>
                    </li>
                    <li>
                        <blockquote>
                            "The longer you listen, the sweeter the speech."
                        </blockquote>
                    </li>
                </ul>
            </section>          `
    };

    const defaultContentKey = 'personality';
    infoContent.innerHTML = content[defaultContentKey];
    document.querySelector(`.Button-Main[data-content="${defaultContentKey}"]`).classList.add('active');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            
            const contentKey = button.getAttribute('data-content');

            if (infoContent.innerHTML === content[contentKey]) {
                return;
            }

            infoContent.innerHTML = content[contentKey];  

            infoPanel.classList.remove('fade-in');  
            void infoPanel.offsetWidth;  
            infoPanel.classList.add('fade-in'); 

            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=') || e.key === 'F12') {
        e.preventDefault();
        }        
    });
    
    document.addEventListener('wheel', function(e) {
        if (e.ctrlKey) {
        e.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('contextmenu', event => event.preventDefault());


});
document.addEventListener('keydown', function(e) {
    const activeButton = document.querySelector('.Button-Main.active');
    let newActiveButton;

    if (e.key === 'ArrowRight') {
        newActiveButton = activeButton.nextElementSibling;
    } else if (e.key === 'ArrowLeft') {
        newActiveButton = activeButton.previousElementSibling;
    }

    if (newActiveButton && newActiveButton.classList.contains('Button-Main')) {
        newActiveButton.click();
    }
});
