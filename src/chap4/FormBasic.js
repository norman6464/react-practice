import { useForm } from 'react-hook-form';

export default function FormBasic() {
  // 規定値を準備
  const defaultValues = {
    name: '七誌の権兵衛',
    email: 'admin@example.com',
    gender: 'male',
    memo: '',
  };

  // フォームを初期化
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  // サブミット時の処理
  const onsubmit = (data) => console.log(data);
  const onerror = (err) => console.log(err);

  return (
    <form onsubmit={handleSubmit(onsubmit, onerror)} noValidate>
      {/* 検証ルールなどをフォームに紐づけ */}
      <div>
        <label htmlFor="name">名前：</label>
        <input
          id="name"
          type="text"
          {...register('name', {
            required: '名前必須入力です',
            maxLength: {
              value: 20,
              message: '名前は２０文字で入力してください。',
            },
          })}
        />
      </div>
    </form>
  );
}
