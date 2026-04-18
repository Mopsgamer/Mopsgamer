## Hi there 👋

[![Sources](https://img.shields.io/badge/Sources-3A86A2?style=for-the-badge&logo=github&logoColor=black)](https://github.com/search?q=user%3AMopsgamer+fork%3Atrue&type=repositories)
[![Contributions](https://img.shields.io/badge/Contributions-39B353?style=for-the-badge&logo=github&logoColor=black)](https://github.com/search?q=is%3Apr+author%3AMopsgamer+-user%3AMopsgamer&type=pullrequests)
[![Mentions](https://img.shields.io/badge/Mentions-AB6BD9?style=for-the-badge&logo=github&logoColor=black)](https://github.com/search?q=mentions%3AMopsgamer+-user%3AMopsgamer&type=pullrequests)

<details>
<summary>Bootstrap</summary>

```bash
sudo apt update && sudo apt install -y \
  curl gh git \
  zoxide ripgrep \
  fish
chsh -s $(which fish)

echo 'eval "$(zoxide init bash)"' >> ~/.bashrc
mkdir -p ~/.config/fish
echo 'zoxide init fish | source' >> ~/.config/fish/config.fish

mkdir -p ~/.config/fish/completions
rg --generate complete-fish > ~/.config/fish/completions/rg.fish

curl -fsSL https://bun.sh/install | bash
SHELL=fish bun completions ~/.config/fish/completions

curl -fsSL https://deno.land/install.sh | sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
```
https://github.com/Mopsgamer/github-sign-commits
</details>

### Valuable Contributions
https://github.com/microsoft/vscode-vsce/pull/1257
https://github.com/streamich/memfs/pull/1224

