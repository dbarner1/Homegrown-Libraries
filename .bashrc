alias a="atom ."
alias c='clear'
alias elastic="elasticsearch"
alias gl="git log"
alias ga="git add ."
alias gb="git branch"
alias gc="git checkout"
alias gcm="git checkout master"
alias gd="git diff --patience --ignore-space-change"
alias gh="git log --pretty=format:\"%Cgreen%h%Creset %Cred%ad%Creset %s%C(yellow)%d%Creset %Cred[%an]%Creset\" --graph --date=short"
alias gp="git pull"
alias gs="git status"
alias hconsoles="sudo heroku run console -a heroku-app-name"
alias hconsolep="sudo heroku run console -a heroku-app-name"
alias rc="rails console"
alias redis="redis-server"
alias rs="rails server"
alias qd='cd /Users/dbarner/qeepsake && git branch'
alias qm='cd /Users/dbarner/qeepsake-mobile && git branch'
alias sq="bundle exec sidekiq -c 25 -v -q high -q default -q mailers -q elastic"

export PS1="\W \[\033[0;33m\]⚡\[\033[0;39m\] "
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad

# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"
