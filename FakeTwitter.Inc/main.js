const CURRENT_USER = {
    displayName: "You",
    username: "@you",
    profilePic: "#7ce9d1",
};

let nextPostId = 1;

const posts = [
    {
        id: nextPostId++,
        displayName: "Omwami",
        username: "@omwmamidagoat",
        profilePic: "#ff5656",
        content: "Can't wait for Arsenal to lose!",
        timestamp: "2h",
        likes: 42,
        retweets: 8,
        liked: false,
        retweeted: false,
    },
    {
        id: nextPostId++,
        displayName: "Chandachema Pete",
        username: "@wantam001",
        profilePic: "#7856ff",
        content: "Let us vote wisely in the coming elections",
        timestamp: "4h",
        likes: 128,
        retweets: 34,
        liked: false,
        retweeted: false,
    },
    {
        id: nextPostId++,
        displayName: "Marcus Webb",
        username: "@mwebb",
        profilePic: "#f0c91d",
        content: "Hot take: anime is underrated.",
        timestamp: "6h",
        likes: 891,
        retweets: 112,
        liked: false,
        retweeted: false,
    },
];

const suggestedUsers = [
    { displayName: "Tech Daily", username: "@techdaily", profilePic: "#FF6B6B" },
    { displayName: "Design Notes", username: "@designnotes", profilePic: "#4ECDC4" },
    { displayName: "Code Stream", username: "@codestream", profilePic: "#FFE66D" },
];

const ICONS = {
    reply: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"/></svg>`,
    retweet: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"/></svg>`,
    like: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.29 6.82 4.032-2.55 6.216-4.85 7.29-6.82 1.112-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.242-1.709c1.12.056 2.066.784 2.553 1.929.488 1.143.413 2.685-.763 4.684-1.102 1.871-3.469 4.338-8.008 7.007a.751.751 0 01-.842 0c-4.539-2.669-6.906-5.136-8.008-7.007-1.176-1.999-1.251-3.541-.763-4.684.487-1.145 1.433-1.873 2.553-1.929 1.395-.073 2.688.622 3.624 1.78.936-1.158 2.23-1.853 3.624-1.78z"/></svg>`,
    likeFilled: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.502-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"/></svg>`,
    share: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"/></svg>`,
    moon: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/></svg>`,
    sun: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM3.75 12a8.25 8.25 0 0114.063-5.844.75.75 0 00-1.06-1.06A9.75 9.75 0 102.25 12a.75.75 0 001.5 0z"/></svg>`,
};

// Formats a number as a compact display value, such as 1.2K or 3M.
function formatCount(n) {
    if (n === 0) return "";
    if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    return String(n);
}

// Creates the HTML article element used to display one post in the feed.
function buildPost(post) {
    const el = document.createElement("article");
    el.className = "post";
    el.dataset.id = post.id;

    el.innerHTML = `
        <div class="profile-pic" style="background:${post.profilePic}"></div>
        <div class="post-header">
            <span class="display-name">${escapeHtml(post.displayName)}</span>
            <span class="username">${escapeHtml(post.username)}</span>
            <span class="timestamp">${escapeHtml(post.timestamp)}</span>
        </div>
        <div class="content">${escapeHtml(post.content)}</div>
        <div class="post-actions">
            <button type="button" class="post-action reply" aria-label="Reply">${ICONS.reply}</button>
            <button type="button" class="post-action retweet${post.retweeted ? " active" : ""}" aria-label="Retweet" data-action="retweet">
                ${ICONS.retweet}
                <span class="count">${formatCount(post.retweets)}</span>
            </button>
            <button type="button" class="post-action like${post.liked ? " active" : ""}" aria-label="Like" data-action="like">
                ${post.liked ? ICONS.likeFilled : ICONS.like}
                <span class="count">${formatCount(post.likes)}</span>
            </button>
            <button type="button" class="post-action share" aria-label="Share">${ICONS.share}</button>
        </div>
    `;

    return el;
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}


function renderFeed() {
    const feedEl = document.querySelector(".feed-posts");
    feedEl.innerHTML = "";

    for (const post of posts) {
        feedEl.appendChild(buildPost(post));
    }
}

function renderAccount() {
    const accEl = document.querySelector(".acc");
    accEl.innerHTML = `
        <div class="profile-pic" style="background:${CURRENT_USER.profilePic}"></div>
        <div class="acc-details">
            <div class="display-name">${escapeHtml(CURRENT_USER.displayName)}</div>
            <div class="username">${escapeHtml(CURRENT_USER.username)}</div>
        </div>
        <div class="acc-more">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>
        </div>
    `;
}

function renderSuggested() {
    const suggestedEl = document.querySelector(".suggested");
    suggestedEl.innerHTML = `
        <div class="suggested-header">Who to follow</div>
        ${suggestedUsers
            .map(
                (user) => `
            <div class="suggested-user">
                <div class="profile-pic" style="background:${user.profilePic}"></div>
                <div class="user-info">
                    <div class="display-name">${escapeHtml(user.displayName)}</div>
                    <div class="username">${escapeHtml(user.username)}</div>
                </div>
                <button type="button" class="follow-btn">Follow</button>
            </div>
        `
            )
            .join("")}
        <div class="suggested-footer">Show more</div>
    `;

    suggestedEl.querySelectorAll(".follow-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            btn.classList.toggle("following");
            btn.textContent = btn.classList.contains("following") ? "Following" : "Follow";
        });
    });
}

function setupTweetForm() {
    const form = document.querySelector(".tweet-form");
    const textarea = form.querySelector("textarea");
    const submitBtn = form.querySelector('button[type="submit"]');

    const avatar = document.createElement("div");
    avatar.className = "form-avatar";
    avatar.style.background = CURRENT_USER.profilePic;
    form.insertBefore(avatar, form.firstChild);

    const actions = document.createElement("div");
    actions.className = "form-actions";
    submitBtn.parentNode.insertBefore(actions, submitBtn);
    actions.appendChild(submitBtn);

    function autoGrow() {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
    }

    function updateSubmitState() {
        const hasText = textarea.value.trim().length > 0;
        submitBtn.disabled = !hasText;
    }

    textarea.addEventListener("input", () => {
        autoGrow();
        updateSubmitState();
    });

    textarea.addEventListener("keydown", (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
            e.preventDefault();
            if (!submitBtn.disabled) form.requestSubmit();
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const content = textarea.value.trim();
        if (!content) return;

        posts.unshift({
            id: nextPostId++,
            displayName: CURRENT_USER.displayName,
            username: CURRENT_USER.username,
            profilePic: CURRENT_USER.profilePic,
            content,
            timestamp: "now",
            likes: 0,
            retweets: 0,
            liked: false,
            retweeted: false,
        });

        textarea.value = "";
        textarea.style.height = "auto";
        updateSubmitState();
        renderFeed();
    });

    updateSubmitState();
}

function setupNavTabs() {
    const navItems = document.querySelectorAll(".nav-item");
    navItems[0].classList.add("active");

    navItems.forEach((item) => {
        item.addEventListener("click", () => {
            navItems.forEach((n) => n.classList.remove("active"));
            item.classList.add("active");
        });
    });
}

function setupSidebar() {
    const items = document.querySelectorAll(".side-bar-item:not(.theme-toggle)");
    items[0].classList.add("active");

    items.forEach((item) => {
        item.addEventListener("click", () => {
            items.forEach((i) => i.classList.remove("active"));
            item.classList.add("active");
        });
    });
}

function setupThemeToggle() {
    const toggle = document.querySelector(".theme-toggle");
    const iconEl = toggle.querySelector(".theme-icon");

    function updateIcon(theme) {
        iconEl.innerHTML = theme === "dark" ? ICONS.sun : ICONS.moon;
    }

    document.documentElement.setAttribute("data-theme", "light");
    updateIcon("light");

    function flipTheme() {
        const current = document.documentElement.getAttribute("data-theme") || "light";
        const next = current === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", next);
        updateIcon(next);
    }

    toggle.addEventListener("click", flipTheme);
    toggle.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            flipTheme();
        }
    });
}

function setupPostActions() {
    const feedEl = document.querySelector(".feed-posts");

    feedEl.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-action]");
        if (!btn) return;

        e.stopPropagation();
        const postEl = btn.closest(".post");
        const postId = Number(postEl.dataset.id);
        const post = posts.find((p) => p.id === postId);
        if (!post) return;

        const action = btn.dataset.action;

        if (action === "like") {
            post.liked = !post.liked;
            post.likes += post.liked ? 1 : -1;
        } else if (action === "retweet") {
            post.retweeted = !post.retweeted;
            post.retweets += post.retweeted ? 1 : -1;
        }

        const updated = buildPost(post);
        postEl.replaceWith(updated);
    });
}

function init() {
    setupThemeToggle();
    renderAccount();
    renderSuggested();
    setupTweetForm();
    setupNavTabs();
    setupSidebar();
    setupPostActions();
    renderFeed();
}

init();