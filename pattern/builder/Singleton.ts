/**
 * @desc 单例模式实现，使用饿汉式实现
 */
export default class Singleton { 
    private static instance = new Singleton();
    private constructor() { 
    }
    public static getInstance() :Singleton{ 
        return Singleton.instance;
    }
}