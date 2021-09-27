function firstish<T extends { length: number }>(t1: T, t2: T): T {
    return t1.length > t2.length ? t1 : t2;
  }

