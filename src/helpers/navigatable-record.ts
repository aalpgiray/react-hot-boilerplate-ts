import { Record } from 'immutable';
import { NavigableObject } from 'navigatable-object';

export { NavigableObject } from 'navigatable-object';

export function NavigatableRecordFactory<X>(defaultValues: X, name?: string) {
    abstract class NavigatableRecord<P extends NavigatableRecord<P>> extends Record(defaultValues, name){
        SetValue<T>(fn: (x: NavigableObject<P>) => NavigableObject<T>, value: T) {
            return this.setIn(fn(new NavigableObject<any>(this)).getPath(), value)
        }
    }
    return NavigatableRecord;
}