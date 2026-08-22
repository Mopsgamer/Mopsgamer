export interface Project {
  id: string;
  title: string;
  repo: string;
  description: string;
  url: string;
  type: 'project' | 'pr';
  status: 'active' | 'pending' | 'merged' | 'featured';
  statusLabel: string;
  tags: string[];
  stars?: number;
  forks?: number;
  animationDelay: string;
  floatSpeed: 'slow' | 'medium' | 'fast';
  accentColor: string;
}

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  iconName: string;
  badgeText?: string;
  color: string;
}

export interface Profile {
  name: string;
  username: string;
  avatarUrl: string;
  bio: string;
  tagline: string;
  status: string;
  location: string;
  socials: SocialLink[];
  quickStats: {
    label: string;
    value: string;
    url?: string;
  }[];
}

export const profileData: Profile = {
  name: "Lev",
  username: "Mopsgamer",
  avatarUrl: "https://github.com/Mopsgamer.png",
  bio: "I'm Lev, and I'm trying to fix stuff.",
  tagline: "Open-source developer fixing tools, core utilities, and CLI developer experiences.",
  status: "",
  location: "Global / Remote",
  socials: [
    {
      name: "GitHub",
      handle: "@Mopsgamer",
      url: "https://github.com/Mopsgamer",
      iconName: "Github",
      color: "#f0f6fc"
    },
    {
      name: "Discord",
      handle: "mops0234",
      url: "https://discord.gg/ASQq9VkB",
      iconName: "MessageSquare",
      badgeText: "accept friend request",
      color: "#5865F2"
    },
    {
      name: "Telegram",
      handle: "mops0234",
      url: "https://t.me/mops0234",
      iconName: "Send",
      color: "#229ED9"
    },
    {
      name: "Sources",
      handle: "Forks & Repos",
      url: "https://github.com/search?q=user%3AMopsgamer+fork%3Atrue&type=repositories",
      iconName: "Code2",
      badgeText: "Repositories",
      color: "#00f2fe"
    },
    {
      name: "Contributions",
      handle: "Pull Requests",
      url: "https://github.com/search?q=is%3Apr+author%3AMopsgamer+-user%3AMopsgamer&type=pullrequests",
      iconName: "GitPullRequest",
      badgeText: "External PRs",
      color: "#10b981"
    },
    {
      name: "Mentions",
      handle: "PR Mentions",
      url: "https://github.com/search?q=mentions%3AMopsgamer+-user%3AMopsgamer&type=pullrequests",
      iconName: "AtSign",
      badgeText: "Discussions",
      color: "#f59e0b"
    }
  ],
  quickStats: [
    { label: "Repositories", value: "Sources & Forks", url: "https://github.com/search?q=user%3AMopsgamer+fork%3Atrue&type=repositories" },
    { label: "PR Contributions", value: "Upstream Fixes", url: "https://github.com/search?q=is%3Apr+author%3AMopsgamer+-user%3AMopsgamer&type=pullrequests" },
    { label: "Primary Runtime", value: "Bun 1.4+", url: "https://bun.sh" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "github-sign-commits",
    title: "github-sign-commits",
    repo: "Mopsgamer/github-sign-commits",
    description: "Automated tool and CLI workflow to seamlessly setup, configure, and sign Git commits using GitHub keys and GPG/SSH workflows.",
    url: "https://github.com/Mopsgamer/github-sign-commits",
    type: "project",
    status: "featured",
    statusLabel: "Featured Tool",
    tags: ["Git", "Security", "CLI", "Automation", "TypeScript"],
    animationDelay: "0s",
    floatSpeed: "slow",
    accentColor: "#00f2fe"
  },
  {
    id: "vscode-vsce-1257",
    title: "microsoft/vscode-vsce #1257",
    repo: "microsoft/vscode-vsce",
    description: "Fixes and DX improvements for official VS Code Extension publishing utility command line tool.",
    url: "https://github.com/microsoft/vscode-vsce/pull/1257",
    type: "pr",
    status: "pending",
    statusLabel: "Pending PR",
    tags: ["VS Code", "CLI", "TypeScript", "Publishing"],
    animationDelay: "0.8s",
    floatSpeed: "medium",
    accentColor: "#10b981"
  },
  {
    id: "memfs-1224",
    title: "streamich/memfs #1224",
    repo: "streamich/memfs",
    description: "Core fixes and file handling optimization for Node.js in-memory virtual filesystem library.",
    url: "https://github.com/streamich/memfs/pull/1224",
    type: "pr",
    status: "pending",
    statusLabel: "Pending PR",
    tags: ["Virtual FS", "Node.js", "In-Memory", "Storage"],
    animationDelay: "1.6s",
    floatSpeed: "slow",
    accentColor: "#8b5cf6"
  },
  {
    id: "npmx-2464",
    title: "npmx-dev/npmx.dev #2464",
    repo: "npmx-dev/npmx.dev",
    description: "Developer experience enhancements and web package tooling fixes for npmx.dev registry search.",
    url: "https://github.com/npmx-dev/npmx.dev/pull/2464",
    type: "pr",
    status: "pending",
    statusLabel: "Pending PR",
    tags: ["Package Manager", "Web", "DX", "Registry"],
    animationDelay: "1.2s",
    floatSpeed: "fast",
    accentColor: "#f59e0b"
  },
  {
    id: "betterdiscord-2127",
    title: "BetterDiscord/BetterDiscord #2127",
    repo: "BetterDiscord/BetterDiscord",
    description: "Client enhancement and plugin API refinements for the BetterDiscord desktop ecosystem.",
    url: "https://github.com/BetterDiscord/BetterDiscord/pull/2127",
    type: "pr",
    status: "pending",
    statusLabel: "Pending PR",
    tags: ["Electron", "Discord", "Plugins", "UI"],
    animationDelay: "2.0s",
    floatSpeed: "medium",
    accentColor: "#ec4899"
  }
];

export const linuxBootstrapScript = `sudo apt update && sudo apt install -y \\
  curl gh git \\
  zoxide ripgrep \\
  fish
chsh -s $(which fish)

git config --global push.followTags true
git config --global pull.rebase true
fish -c "alias --save fixup='git commit -am \"fixup\"'"

echo 'eval "$(zoxide init bash)"' >> ~/.bashrc
mkdir -p ~/.config/fish
echo 'zoxide init fish | source' >> ~/.config/fish/config.fish

mkdir -p ~/.config/fish/completions
rg --generate complete-fish > ~/.config/fish/completions/rg.fish

curl -fsSL https://bun.sh/install | bash
SHELL=fish bun completions ~/.config/fish/completions

curl -fsSL https://deno.land/install.sh | sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash`;
