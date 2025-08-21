export default function wrapPromise(promise) {
  // Promise の状態を管理する（pending,fulfilled,rejected）
  let status = 'pending';

  let data;

  let wrapper = promise.then(
    (result) => {
      status = 'fulfilled';
      data = result;
    },
    (e) => {
      status = 'rejected';
      data = e;
    }
  );

  return {
    get() {
      switch (status) {
        case 'fulfilled':
          return data;
        case 'rejected':
          throw data;
        case 'pending':
          throw wrapper; // 完了前はPromiseをスロー
        default:
          break;
      }
    },
  };
}
