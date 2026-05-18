<script lang="ts">
	const faqs = [
		{
			question: 'どのページで動きますか？',
			answer: 'あいち同友会サイトのログイン後ページで動作します。予定の抽出と登録は、マイスケジュール、行事活動一覧、予定詳細、申込登録を対象にしています。名簿は組織員一覧、名簿ページ、配信先ページを開いたときに更新します。'
		},
		{
			question: 'Googleカレンダーは複数使えますか？',
			answer: '参照表示するカレンダーは複数選択できます。予定を書き込む保存先カレンダーは重複や誤登録を避けるためひとつに限定しています。初期状態ではメインカレンダーを登録先と参照対象にし、同友会専用カレンダーを使うかどうかはユーザーが設定します。'
		},
		{
			question: '欠席予定も登録されますか？',
			answer: '登録対象は出席予定だけです。欠席のみの予定は未登録ではなく登録対象外として扱います。既に登録済みの予定が欠席に変わった場合は、キャッシュ済みの Googleカレンダーイベント ID を使って削除します。'
		},
		{
			question: '予定内容や出欠返信はどう扱いますか？',
			answer: '詳細画面から日時、場所、概要、出欠項目を読み直し、Googleカレンダー側のイベントを更新します。出欠返信はブラウザの localStorage に保存し、一覧やサイドパネルの状態補正に使います。'
		},
		{
			question: '組織図の情報はどこから取っていますか？',
			answer: 'マイページのヘッダーメニューにある組織一覧を解析し、P を所属地区、G を年度ごとの所属グループとして扱います。表示は自身に関係する組織を中心にし、年度ごとにキャッシュします。'
		},
		{
			question: '名簿タブには何が表示されますか？',
			answer: '組織員一覧、名簿ページ、配信先ページを開いたときに検出した会員名簿を localStorage に保存し、氏名、会社、所属バッジ、役職、メールを表示します。ページングと所属バッジによる絞り込みに対応しています。'
		},
		{
			question: '告知メールタブは何をする機能ですか？',
			answer: 'あいどるの例会メール送信機能を使わず、Gmail など普段使うメール環境から直接告知メールを送るための補助機能です。イベント詳細ページの内容から告知本文を作成し、名簿キャッシュの所属バッジから送信先を選んで BCC 用メールアドレスをコピーできます。'
		},
		{
			question: 'Gmail の下書きは自動作成されますか？',
			answer: 'Gmail API は使いません。Gmail 作成画面を開くときに To と件名だけを渡し、BCC と本文は拡張内のコピー枠から貼り付ける運用です。BCC 送信時は To に自分のメールアドレスを指定してください。'
		},
		{
			question: '初回に何をすればよいですか？',
			answer: 'はじめにタブの状態チェックに沿って、設定タブでカレンダーを選び、マイページで組織を検出し、組織管理の組織員一覧を開いて名簿キャッシュを作成してください。その後、マイスケジュールまたは行事活動一覧を開くと予定を検出できます。'
		},
		{
			question: 'ページ遷移するとサイドパネルは初期状態に戻りますか？',
			answer: '同じブラウザセッション内では、最後に開いていたタブとパネルの開閉状態を sessionStorage に保存して復元します。ログイン直後のトップページでは状態をクリアし、初期状態から始めます。'
		},
		{
			question: '表示月は年度をまたいで選べますか？',
			answer: '選べません。対象サイトは年度をまたいだ予定取得に対応していないため、カレンダータブの月選択はサイトで選択中の年度内に限定しています。年度をまたぐ場合は、同友会サイト上部の年度プルダウンを変更してから表示してください。'
		},
		{
			question: '名簿や所属がずれた場合はどうしますか？',
			answer: '組織図の「組織を再取得」と、名簿タブの「名簿キャッシュをクリア」を使ってから、組織員一覧を開き直してください。Googleカレンダー状態がずれた場合は、カレンダータブで対象月を再取得します。'
		},
		{
			question: 'スマートフォンで使えますか？',
			answer: '使えません。PC 版 Chrome または Microsoft Edge を対象にしています。Edge では Chrome Web Store の拡張機能を許可してからインストールしてください。'
		}
	];
</script>

<svelte:head>
	<title>Do You Gcal | FAQ</title>
	<meta name="description" content="Do You Gcal のよくある質問です。" />
</svelte:head>

<section class="page section">
	<p class="eyebrow">FAQ</p>
	<h1>よくある質問</h1>
	<p class="lead">
		使い方、Googleカレンダー連携、組織図、名簿、告知メールについての補足です。
	</p>
	<div class="faq">
		{#each faqs as item (item.question)}
			<details class="panel">
				<summary>{item.question}</summary>
				<p>{item.answer}</p>
			</details>
		{/each}
	</div>
</section>

<style>
	h1,
	p {
		margin-top: 0;
	}

	h1 {
		margin-bottom: 14px;
		font-size: clamp(2.1rem, 4vw, 3.4rem);
		letter-spacing: 0;
	}

	.faq {
		display: grid;
		gap: 10px;
		margin-top: 28px;
	}

	details {
		padding: 0;
	}

	summary {
		cursor: pointer;
		padding: 16px 18px;
		font-weight: 900;
	}

	details p {
		margin: 0;
		padding: 0 18px 18px;
		color: #514c45;
		line-height: 1.75;
	}
</style>
