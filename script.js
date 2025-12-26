// Demo data from demo_texts.txt
const demoData = {
    vietnamese: [
        {
            id: 'north_female',
            title: 'North Female',
            text: 'Sự bùng nổ của trí tuệ nhân tạo đang định hình lại cách chúng ta làm việc và sinh sống. Từ xe tự lái đến trợ lý ảo thông minh, công nghệ đang dần xóa nhòa ranh giới giữa thực tại và những bộ phim viễn tưởng.',
            promptAudio: 'audio/north_female_prompt.wav',
            synthAudio: 'audio/north_female_syn.wav',
            badge: 'Zero-Shot'
        },
        {
            id: 'north_male',
            title: 'North Male',
            text: 'Vết máu lúc ẩn lúc hiện, có mấy lần Quách Tĩnh suýt mất dấu, đều nhờ Hoàng Dung tâm tư tinh tế, tìm trong bụi cỏ rậm cạnh đá núi nhìn thấy, có lúc vết máu mất hút, nàng lại tìm vết chân ngựa và lông ngựa trên mặt đất.',
            promptAudio: 'audio/north_male_prompt.wav',
            synthAudio: 'audio/north_male_syn.wav',
            badge: 'Zero-Shot'
        },
        {
            id: 'south_female',
            title: 'South Female',
            text: 'Nàng chỉ thích thể hiện cái tôi của mình, để gây chú ý với họ. Nàng càng không biết rằng, điều đó khiến người khác khó chịu. Nàng càng chẳng biết, tình cảm không giống như một bàn cờ, mà nàng có thể chủ tâm sắp đặt.',
            promptAudio: 'audio/south_female_prompt.wav',
            synthAudio: 'audio/south_female_syn.wav',
            badge: 'Zero-Shot'
        },
        {
            id: 'south_male',
            title: 'South Male',
            text: 'Theo Tổng Bí thư, hàng loạt chính sách đột phá đã được triển khai bao gồm phát triển công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia; đổi mới xây dựng và thi hành pháp luật; hội nhập quốc tế trong tình hình mới; phát triển kinh tế tư nhân; đổi mới giáo dục và đào tạo, tăng cường chăm sóc, nâng cao sức khỏe nhân dân…',
            promptAudio: 'audio/south_male_prompt.wav',
            synthAudio: 'audio/south_male_syn.wav',
            badge: 'Zero-Shot'
        },
        {
            id: 'middle_female',
            title: 'Middle Female',
            text: 'Thanh gươm của chàng kỵ sĩ hăng máu bổ xuống trước với một sức mạnh ghê gớm, tưởng chỉ một nhát đó cũng đủ kết thúc cuộc chiến đấu và cả cuộc đời phiêu lưu giang hồ của chàng hiệp sĩ xứ man-tra.',
            promptAudio: 'audio/middle_female_prompt.wav',
            synthAudio: 'audio/middle_female_syn.wav',
            badge: 'Zero-Shot'
        },
        {
            id: 'middle_male',
            title: 'Middle Male',
            text: 'Giờ đây, dòng họ đã làm được một việc mà có lẽ tiền nhân cũng chưa hề mơ tới: Đưa một dòng máu lạ về hoà với huyết thống họ Đào để sáng tạo nên một dòng máu khác, chắc hẳn ưu việt hơn nhiều.',
            promptAudio: 'audio/middle_male_prompt.wav',
            synthAudio: 'audio/middle_male_syn.wav',
            badge: 'Zero-Shot'
        },
        {
            id: 'kid_girl',
            title: 'Kid Girl',
            text: 'Ngày xửa ngày xưa, ở một ngôi làng nọ có cô Tấm xinh đẹp, nết na nhưng sớm mồ côi mẹ. Dù bị mẹ kế và Cám hãm hại đủ đường, Tấm vẫn giữ được tấm lòng lương thiện và cuối cùng tìm được hạnh phúc xứng đáng.',
            promptAudio: 'audio/kid_girl_prompt.wav',
            synthAudio: 'audio/kid_girl_syn.wav',
            badge: 'Few-Shot'
        },
        {
            id: 'kid_boy',
            title: 'Kid Boy',
            text: 'Ngày xửa ngày xưa, trong một khu rừng xanh mát, có một chú thỏ rất nhanh nhẹn và nổi tiếng với đôi chân chạy nhanh như gió. Thỏ thường đi khoe khắp nơi rằng mình là con vật nhanh nhất khu rừng, còn chê bai những con vật đi chậm chạp, đặc biệt là chú rùa.',
            promptAudio: 'audio/kid_boy_prompt.wav',
            synthAudio: 'audio/kid_boy_syn.wav',
            badge: 'Few-Shot'
        }
    ],
    crossLanguage: [
        {
            id: 'cross_en_vi',
            title: 'English → Vietnamese',
            text: 'Thời gian trôi nhẹ như dòng sông trước nhà, tưởng chừng phẳng lặng mà mang theo bao điều đổi thay. Đôi lúc ngồi bên chén trà nóng, ta mới thấy những chuyện tưởng nhỏ ngày xưa lại thành ký ức quý giá nhất lúc về già.',
            promptAudio: 'audio/cross_en_vi_prompt.wav',
            synthAudio: 'audio/cross_en_vi_syn.wav',
            badge: 'Cross-Language'
        },
        {
            id: 'cross_vi_en',
            title: 'Vietnamese → English',
            text: 'Surgeons at the 108 Military Central Hospital successfully carried out a multiorgan transplant using organs from a brain-dead donor on Saturday.',
            promptAudio: 'audio/cross_vi_en_prompt.wav',
            synthAudio: 'audio/cross_vi_en_syn.wav',
            badge: 'Cross-Language'
        }
    ],
    codeSwitch: [
        {
            id: 'code_switch',
            title: 'Vietnamese-English Code-Switch',
            text: 'Sáng nay họp với khách hàng xong thì team mình nhận được feedback là cái concept này chưa đủ hay, họ muốn một cái gì đó viral hơn và match đúng với insight của Gen z, nên mọi người chịu khó brainstorm thêm một chút để kịp deadline gửi lại proposal vào sáng mai nhé.',
            promptAudio: 'audio/code_switch_prompt.wav',
            synthAudio: 'audio/code_switch_syn.wav',
            badge: 'Code-Switch'
        }
    ]
};

// Create audio player component
function createAudioPlayer(audioSrc, label) {
    const wrapper = document.createElement('div');
    wrapper.className = 'audio-player-wrapper';
    
    const audio = document.createElement('audio');
    audio.className = 'audio-player';
    audio.src = audioSrc;
    audio.preload = 'metadata';
    
    const playButton = document.createElement('button');
    playButton.className = 'play-button';
    playButton.innerHTML = '▶';
    playButton.setAttribute('aria-label', `Play ${label}`);
    
    let isPlaying = false;
    
    playButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playButton.innerHTML = '▶';
            isPlaying = false;
        } else {
            audio.play();
            playButton.innerHTML = '⏸';
            isPlaying = true;
        }
    });
    
    audio.addEventListener('ended', () => {
        playButton.innerHTML = '▶';
        isPlaying = false;
    });
    
    audio.addEventListener('pause', () => {
        if (!audio.ended) {
            playButton.innerHTML = '▶';
            isPlaying = false;
        }
    });
    
    wrapper.appendChild(playButton);
    wrapper.appendChild(audio);
    
    return wrapper;
}

// Create demo card
function createDemoCard(demo) {
    const card = document.createElement('div');
    card.className = 'demo-card';
    
    const header = document.createElement('div');
    header.className = 'demo-card-header';
    
    const title = document.createElement('h3');
    title.className = 'demo-card-title';
    title.textContent = demo.title;
    
    const badge = document.createElement('span');
    badge.className = 'demo-card-badge';
    badge.textContent = demo.badge;
    
    header.appendChild(title);
    header.appendChild(badge);
    
    const text = document.createElement('div');
    text.className = 'demo-text';
    text.textContent = demo.text;
    
    const promptSection = document.createElement('div');
    promptSection.className = 'audio-section';
    const promptLabel = document.createElement('span');
    promptLabel.className = 'audio-label';
    promptLabel.textContent = '📢 Reference Prompt:';
    promptSection.appendChild(promptLabel);
    promptSection.appendChild(createAudioPlayer(demo.promptAudio, 'prompt'));
    
    const synthSection = document.createElement('div');
    synthSection.className = 'audio-section';
    const synthLabel = document.createElement('span');
    synthLabel.className = 'audio-label';
    synthLabel.textContent = '🎵 Synthesized Output:';
    synthSection.appendChild(synthLabel);
    synthSection.appendChild(createAudioPlayer(demo.synthAudio, 'synthesized'));
    
    card.appendChild(header);
    card.appendChild(text);
    card.appendChild(promptSection);
    card.appendChild(synthSection);
    
    return card;
}

// Populate demo sections
function populateDemos() {
    const vietnameseContainer = document.getElementById('vietnamese-demos');
    const crossLanguageContainer = document.getElementById('cross-language-demos');
    const codeSwitchContainer = document.getElementById('code-switch-demos');
    
    // Populate Vietnamese demos
    demoData.vietnamese.forEach(demo => {
        vietnameseContainer.appendChild(createDemoCard(demo));
    });
    
    // Populate cross-language demos
    demoData.crossLanguage.forEach(demo => {
        crossLanguageContainer.appendChild(createDemoCard(demo));
    });
    
    // Populate code-switch demos
    demoData.codeSwitch.forEach(demo => {
        codeSwitchContainer.appendChild(createDemoCard(demo));
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    populateDemos();
    
    // Add smooth scrolling to navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

