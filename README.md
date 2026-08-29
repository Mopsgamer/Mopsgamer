## Hi there 🌵

I'm Lev, and I'm trying to fix stuff.

Discord ([accept friend request](https://discord.gg/ASQq9VkB)), Telegram - mops0234

<a href="https://github.com/search?q=user%3AMopsgamer+fork%3Atrue&type=repositories"><kbd><img src="https://github.githubassets.com/favicons/favicon-dark.svg" height="20" align="center"> Sources</kbd></a> <a href="https://github.com/search?q=is%3Apr+author%3AMopsgamer+-user%3AMopsgamer&type=pullrequests"><kbd><img src="https://github.githubassets.com/favicons/favicon-dark.svg" height="20" align="center"> Contributions</kbd></a> <a href="https://github.com/search?q=mentions%3AMopsgamer+-user%3AMopsgamer&type=pullrequests"><kbd><img src="https://github.githubassets.com/favicons/favicon-dark.svg" height="20" align="center"> Mentions</kbd></a>

<details>
<summary>Linux Bootstrap (for me)</summary>

```bash
sudo apt update && sudo apt install -y \
  curl gh git \
  zoxide ripgrep \
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
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
```
https://github.com/Mopsgamer/github-sign-commits
</details>

### Pending :shipit:

https://github.com/microsoft/vscode-vsce/pull/1257

https://github.com/streamich/memfs/pull/1224

https://github.com/npmx-dev/npmx.dev/pull/2464

https://github.com/npmx-dev/npmx.dev/pull/3214
