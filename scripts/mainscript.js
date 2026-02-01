const MainPageLink = "index.html";

const GithubLink = "https://github.com/HiFirsty999";
const YoutubeLink = "https://www.youtube.com/@Firsty_TheProgrammer";
const TiktokLink = "https://www.tiktok.com/@fcfirstyboy";
const ChessLink = "https://www.chess.com/member/hello_firsty";
const ProjectsLink = "projects.html";
const Gmail = "mailto:firsty.ph@gmail.com";

const ClickerGameLink = "https://hifirsty999.github.io/ClickerGame/";

//Accounts

function ChangeToGithub() {
    window.open(GithubLink);
}

function ChangeToYoutube() {
    window.open(YoutubeLink);
}

function ChangeToTiktok() {
    window.open(TiktokLink);
}

function ChangeToChess() {
    window.open(ChessLink);
}

//Projects And Games

function ViewProjects() {
    window.location.href = ProjectsLink;
}

function ToMainPage() {
    window.location.href = MainPageLink;
}

function ToClickerGame() {
    window.open(ClickerGameLink);
}


//Others

function ToGmail() {
    window.location.href = Gmail;
}