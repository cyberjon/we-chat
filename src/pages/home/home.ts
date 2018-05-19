import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

interface record {
    id: number,
    avatar: string,
    name: string,
    message: string,
    offline: boolean,
    time: string
}

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    list: record[] = [
        {
            id: 1,
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526711179372&di=908e0027e491a1b72388f00b43e35ca5&imgtype=0&src=http%3A%2F%2Fp3.wmpic.me%2Farticle%2F2017%2F12%2F30%2F1514603717_LLVcroMk.jpg',
            name: '测试',
            message: '有离线消息',
            offline: false,
            time: '10:00'
        }
    ];

    constructor(public navCtrl: NavController) {
        // 这里获取数据进行处理
        this.loadList();
    }

    loadList(){
        // for(let i = 0; i < 20; i++){
        //     this.list.push({
        //         id: i+1,
        //         avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526711179372&di=908e0027e491a1b72388f00b43e35ca5&imgtype=0&src=http%3A%2F%2Fp3.wmpic.me%2Farticle%2F2017%2F12%2F30%2F1514603717_LLVcroMk.jpg',
        //         name: '测试',
        //         message: '有离线消息',
        //         offline: false
        //     })
        // }
    }

    getItems(data){
        console.log(data);
    }
}
