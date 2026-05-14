<script lang="ts">
	const faqs = [
		{
			question: 'どのページで動きますか？',
			answer: 'あいち同友会サイトのログイン後ページで動作します。予定一覧、予定詳細、申込登録、マイページの組織メニューを主な対象にしています。'
		},
		{
			question: 'Google カレンダーは複数使えますか？',
			answer: '参照表示するカレンダーは複数選択できます。予定を書き込む保存先カレンダーは重複や誤登録を避けるためひとつに限定しています。'
		},
		{
			question: '欠席予定も登録されますか？',
			answer: '登録対象は出席予定だけです。欠席に変わった予定は、キャッシュ済みの Google カレンダーイベント ID を使って削除します。'
		},
		{
			question: '予定内容が変わった場合はどうなりますか？',
			answer: '詳細画面から日時、場所、概要、出欠項目を読み直し、Google カレンダー側のイベントを更新します。差分検知用の fingerprint も保持します。'
		},
		{
			question: '組織図ツリーの情報はどこから取っていますか？',
			answer: 'マイページのヘッダーメニューにある Set_Link_FPG の引数を解析し、P を所属地区、G を年度ごとの所属グループとして扱います。'
		},
		{
			question: 'スマートフォンで使えますか？',
			answer: '使えません。Chrome 拡張機能なので、PC 版 Chrome を対象にしています。'
		}
	];

	const changelog = [
		['0.7.x', 'Svelte 5 版サイドパネル、Google カレンダー複数参照、組織図ツリー、申込時同期、案内メール/保管庫リンクを追加'],
		['0.5.x', '旧サイト向けの予定登録補助、日付入力補助を提供'],
		['0.4.x', 'Google 認証、年度切替、組織グループ判定、カレンダー登録状態表示を追加']
	];
</script>

<svelte:head>
	<title>Do You Gcal | サポート</title>
	<meta name="description" content="Do You Gcal の使い方、FAQ、更新履歴です。" />
</svelte:head>

<section class="page section support">
	<p class="eyebrow">Support</p>
	<h1>サポート</h1>
	<p class="lead">
		Do You Gcal は、あいち同友会サイトの画面構造を読み取って補助 UI を追加します。
		サイト側の仕様変更で動作が変わる場合は、まず拡張を最新版へ更新し、ページを再読み込みしてください。
	</p>

	<div class="grid two blocks">
		<section class="panel block">
			<h2>推奨設定</h2>
			<ul>
				<li>Google カレンダーに「同友会」などの専用カレンダーを作成します。</li>
				<li>設定タブで、そのカレンダーを登録先に指定します。</li>
				<li>参照表示したい同友会関連カレンダーを複数選択します。</li>
				<li>組織図ツリーはキャッシュされるため、必要に応じて「組織を再取得」を押します。</li>
			</ul>
		</section>

		<section class="panel block">
			<h2>問い合わせ</h2>
			<p>
				不具合の連絡は Chrome Web Store のデベロッパー問い合わせからお願いします。
				対象 URL、表示中の組織名、予定リンクの有無が分かると確認しやすくなります。
			</p>
			<a
				class="button primary"
				href="https://chrome.google.com/webstore/detail/do-you-gcal/nhgpinmgbpglndjkllhbcjcljbenjbgm?hl=ja"
				rel="noreferrer"
			>
				Chrome Web Store
			</a>
		</section>
	</div>
</section>

<section class="page section">
	<h2>FAQ</h2>
	<div class="faq">
		{#each faqs as item (item.question)}
			<details class="panel">
				<summary>{item.question}</summary>
				<p>{item.answer}</p>
			</details>
		{/each}
	</div>
</section>

<section class="page section">
	<h2>更新履歴</h2>
	<div class="history panel">
		{#each changelog as [version, body] (version)}
			<div class="history-row">
				<strong>{version}</strong>
				<span>{body}</span>
			</div>
		{/each}
	</div>
</section>

<style>
	h1,
	h2,
	p {
		margin-top: 0;
	}

	h1 {
		margin-bottom: 14px;
		font-size: clamp(2.1rem, 4vw, 3.4rem);
		letter-spacing: 0;
	}

	h2 {
		margin-bottom: 16px;
		font-size: 1.55rem;
	}

	.blocks {
		margin-top: 30px;
	}

	.block {
		padding: 22px;
	}

	.block ul {
		margin: 0;
		padding-left: 1.2rem;
		line-height: 1.75;
	}

	.block p {
		color: #514c45;
		line-height: 1.75;
	}

	.faq {
		display: grid;
		gap: 10px;
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

	.history {
		overflow: hidden;
	}

	.history-row {
		display: grid;
		grid-template-columns: 92px 1fr;
		gap: 16px;
		padding: 15px 18px;
		line-height: 1.65;
	}

	.history-row + .history-row {
		border-top: 1px solid rgba(44, 44, 44, 0.12);
	}

	.history-row strong {
		color: #5c710f;
	}

	@media (max-width: 560px) {
		.history-row {
			grid-template-columns: 1fr;
			gap: 4px;
		}
	}
</style>
