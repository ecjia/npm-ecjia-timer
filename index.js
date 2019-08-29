/**
 * Ecjia定时器，按秒计时
 */
import {EcjiaNotificationCenter} from "@ecjia/notification-center";

export class EcjiaTimer {

    constructor() {
        //static property
        this.constructor.EcjiaGlobalTimerKey = 'ecjia-global-timer';

        //new propery
        this.notification = EcjiaNotificationCenter.getInstance();
        this.timer = null;
    }

    /**
     * 启动定时器
     */
    start() {
        this.timer = setInterval(this.timerRunNotification.bind(this), 1000);
    }

    /**
     * 停止定时器
     */
    stop() {
        clearInterval(this.timer);
    }

    /**
     * 定时器执行方法
     */
    timerRunNotification() {
        // console.log('timerRunNotification');
        this.notification.postNotificationName(this.constructor.EcjiaGlobalTimerKey);
    }

    /**
     * 添加监听
     * @param observer
     */
    addListener(observer) {
        this.notification.addNotification(this.constructor.EcjiaGlobalTimerKey, 'timerNotification', observer)
    }

    /**
     * 移除监听
     */
    removeListener(observer) {
        this.notification.removeNotification(this.constructor.EcjiaGlobalTimerKey, observer);
    }

    //静态方法
    static getInstance() {
        if (! this.instance) {
            this.instance = new EcjiaTimer();
        }
        return this.instance;
    }

}