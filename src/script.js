
// 役割のデータベースを読み込む


const controleRoles = new class {
    constructor() {
        this.NumberOfWeeks = 15;
        this.members = ['Arimoto', 'Kurose', 'Inoue', 'Isi'];
        // this.members_jp = ['有本', '黒瀬', '井上', '石井'];
        this.roleDatas = [];
        this.createRoleData();
    }
    createRoleData() {
        for (let i = 0; i < this.NumberOfWeeks; i++) {
            this.roleDatas.push(
                {
                    "leader": this.members[i % 4],
                    "secretary": this.members[(i + 1) % 4]
                }
            )
        }
    }
}



function showRole() {
    var rawWeek = document.getElementById("week").value - 0;
    var idx = rawWeek - 3;

    if (!(3 <= rawWeek && rawWeek <= 17)) {
        // 3週~17週までしかカバーしてないですよ~って意味
        alert("The week element must be more than 3 and less than 17");
        return false;
    }

    document.getElementById("printLeader").innerHTML = controleRoles.roleDatas[idx].leader;
    document.getElementById("printSecretary").innerHTML = controleRoles.roleDatas[idx].secretary;
}