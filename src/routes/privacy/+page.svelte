<svelte:head>
	<title>Do You Gcal | プライバシーポリシー</title>
	<meta name="description" content="Do You Gcal のプライバシーポリシーです。" />
</svelte:head>

<section class="page section privacy">
	<p class="eyebrow">Privacy</p>
	<h1>プライバシーポリシー</h1>
	<div class="panel content">
		<h2>取得する情報</h2>
		<p>
			Do You Gcal は、拡張機能の動作に必要な範囲で、あいち同友会サイト上の予定情報、出欠状態、
			組織名、組織切替リンク、Google カレンダーのイベント ID をブラウザ内に保存します。
		</p>

		<h2>Google カレンダー連携</h2>
		<p>
			Google カレンダー API は、ユーザーが選択したカレンダーへの予定作成、更新、削除、参照表示のために利用します。
			保存先カレンダーや登録済みイベントの対応関係は、重複登録を避けるためブラウザの localStorage に保持します。
		</p>

		<h2>外部送信</h2>
		<p>
			拡張機能は、予定登録に必要な Google API と対象サイトへの通常のアクセスを除き、取得した予定情報や組織情報を
			独自サーバーへ送信しません。
		</p>

		<h2>お問い合わせ</h2>
		<p>本ポリシーに関する連絡は Chrome Web Store のデベロッパー問い合わせからお願いします。</p>
	</div>
</section>

<style>
	h1,
	h2,
	p {
		margin-top: 0;
	}

	h1 {
		margin-bottom: 20px;
		font-size: clamp(2rem, 4vw, 3.2rem);
		letter-spacing: 0;
	}

	.content {
		padding: 24px;
	}

	.content h2 {
		margin-bottom: 8px;
		font-size: 1.2rem;
	}

	.content h2:not(:first-child) {
		margin-top: 24px;
	}

	.content p {
		margin-bottom: 0;
		color: #514c45;
		line-height: 1.85;
	}
</style>
