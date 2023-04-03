namespace App {
  //Autobind decorator
  export function autobind(
    target: any,
    method: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    const adjDescritor: PropertyDescriptor = {
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };
    return adjDescritor;
  }
}
