export class NavigableObject<T>{
    constructor(private obj: T, private path: string[] = []) { }

    To<R extends PropertyKey>(p: (x: T) => R): NavigableObject<R> {

        let propName = this.getPropName(p)

        if (propName) {
            return new NavigableObject<R>(
                p(this.obj),
                this.path.concat(propName)
            );
        } else {
            return new NavigableObject<R>(
                p(this.obj),
                this.path
            );
        }
    }

    getPath() {
        return this.path;
    }


    private static propertyRegEx = /\.([^\.;]+);?\s*\}$/;

    private getPropName(propertyFunction: Function) {
        let value = NavigableObject.propertyRegEx.exec(propertyFunction.toString())
        if (value)
            return value[1];
    }
}