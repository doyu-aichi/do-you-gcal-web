<script lang="ts">
	const supportFormUrl =
		'https://docs.google.com/forms/d/e/1FAIpQLSf5j5-TjUa0nobseMrh7U3l3lWKR_zIN-rUUM52wFP2FagR9w/viewform';

	const changelog = [
		['0.7.x', 'Svelte 5 版サイドパネル、初回セットアップ、状態保持、Googleカレンダー複数参照、年度内月選択、終了済み予定トグル、組織図、名簿タブ、告知メール、出欠返信キャッシュ、申込時同期、案内メール/保管庫リンク、拡張機能保存領域へのキャッシュ移行を追加'],
		['0.5.x', '旧サイト向けの予定登録補助、日付入力補助を提供'],
		['0.4.x', 'Google 認証、年度切替、組織グループ判定、カレンダー登録状態表示を追加']
	];

	const usageSections = [
		{
			title: '初回セットアップ',
			items: [
				'PC 版 Chrome または Microsoft Edge に拡張をインストールします。',
				'あいどるへログインし、右上の Do You Gcal 耳タブを開きます。',
				'はじめにタブの状態チェックに沿って、Googleカレンダー、組織、名簿、予定検出の準備を進めます。',
				'組織と名簿は、マイページや組織員一覧など対象ページを開いたときに検出し、Chrome 拡張機能の保存領域にキャッシュします。'
			]
		},
		{
			title: '予定をGoogleカレンダーへ登録する',
			items: [
				'マイスケジュールまたは行事活動一覧を開き、表示月の予定を検出します。',
				'カレンダータブでページ検出予定とGoogleカレンダー予定を確認します。',
				'イベント詳細ページで内容を確認し、「Googleカレンダーへ反映」を有効にして申込・登録します。',
				'欠席予定は登録対象外です。登録済み予定を欠席に変更した場合は、削除できる範囲でGoogleカレンダーから削除します。'
			]
		},
		{
			title: '組織図と名簿を使う',
			items: [
				'組織図タブで現在の所属、下位グループ、切替、資料保管庫への導線を確認します。',
				'名簿タブでは、組織員一覧や名簿ページで検出した会員をキャッシュから表示します。',
				'所属バッジでメンバーを絞り込み、メール未設定や重複候補などは設定タブの名簿診断で確認します。'
			]
		},
		{
			title: '告知メールを作成する',
			items: [
				'イベント詳細ページを開き、告知メールタブまたはページ上の小型ツールバーから本文を作成します。',
				'名簿の所属バッジで送信先グループを選び、必要に応じて個別除外します。',
				'To、BCC、件名、本文をコピーし、Gmailなど普段使うメール環境で送信します。'
			]
		}
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
		セキュリティ上、対象サイトはあいち同友会サイトに限定しており、それ以外のページでは補助 UI やキャッシュ読み取りを行いません。
	</p>

	<div class="grid two blocks">
		<section class="panel block">
			<h2>推奨設定</h2>
			<ul>
				<li>初期状態ではメインカレンダーが登録先と参照対象になります。</li>
				<li>必要に応じて Googleカレンダーに「同友会」などの専用カレンダーを作成し、設定タブで登録先や参照対象に追加します。</li>
				<li>参照表示したい同友会関連カレンダーは複数選択できます。</li>
				<li>初回はマイページを開いて、現在の組織名と組織メニューを検出させます。</li>
				<li>組織管理の組織員一覧を開いて、名簿キャッシュを作成します。</li>
				<li>名簿ページ上の「この組織を名簿キャッシュ更新」でも、表示中組織の名簿を更新できます。</li>
				<li>予定はマイスケジュールまたは行事活動一覧を開いて、表示月ごとに検出します。表示月はサイトで選択中の年度内から選びます。</li>
				<li>告知メールを送る場合は、イベント詳細ページの小型ツールバーまたは告知メールタブから本文を作成し、送信先グループを選択します。</li>
				<li>キャッシュは対象サイト側の localStorage ではなく、Chrome 拡張機能の保存領域に保持します。旧バージョンの dyg-* キャッシュは移行後に対象サイト側から削除します。</li>
			</ul>
		</section>

		<section class="panel block">
			<h2>問い合わせ</h2>
			<p>
				不具合、要望、質問は専用フォームから送信してください。
				対象 URL、表示中の組織名、予定リンクの有無が分かると確認しやすくなります。
			</p>
			<a class="button primary" href={supportFormUrl} target="_blank" rel="noreferrer">
				問い合わせフォーム
			</a>
			<a class="button" href="/faq">FAQを見る</a>
		</section>
	</div>
</section>

<section class="page section">
	<p class="eyebrow">Guide</p>
	<h2>基本の使い方</h2>
	<div class="guide-grid">
		{#each usageSections as section (section.title)}
			<article class="panel guide-card">
				<h3>{section.title}</h3>
				<ol>
					{#each section.items as item (item)}
						<li>{item}</li>
					{/each}
				</ol>
			</article>
		{/each}
	</div>
</section>

<section class="page section">
	<p class="eyebrow">Contact</p>
	<h2>不具合・要望フォーム</h2>
	<div class="panel contact-panel">
		<div>
			<h3>確認しやすい情報を添えて送信してください</h3>
			<p>
				Do You Gcal は対象サイトのHTMLを読み取って動作するため、発生したページURL、表示中の組織名、操作内容が分かると確認しやすくなります。
				返信が必要な場合のみメールアドレスを入力してください。
			</p>
		</div>
		<div class="contact-guide">
			<ul>
				<li>種別: 不具合、要望、質問</li>
				<li>発生したページURL</li>
				<li>表示中の組織名</li>
				<li>拡張バージョン</li>
				<li>内容</li>
				<li>自己診断結果</li>
				<li>返信先メールアドレス 任意</li>
			</ul>
			<a class="button primary" href={supportFormUrl} target="_blank" rel="noreferrer">
				フォームを開く
			</a>
		</div>
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

	.guide-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 16px;
	}

	.guide-card {
		padding: 22px;
	}

	.guide-card h3 {
		margin: 0 0 12px;
		font-size: 1.12rem;
	}

	.guide-card ol {
		margin: 0;
		padding-left: 1.25rem;
		line-height: 1.75;
	}

	.contact-panel {
		display: grid;
		grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
		gap: 24px;
		padding: 24px;
	}

	.contact-panel h3 {
		margin: 0 0 10px;
		font-size: 1.25rem;
	}

	.contact-panel p {
		margin: 0;
		color: #514c45;
		line-height: 1.75;
	}

	.contact-guide {
		display: grid;
		align-content: start;
		justify-items: start;
		gap: 18px;
	}

	.contact-guide ul {
		margin: 0;
		padding-left: 1.2rem;
		color: #2c2c2c;
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
		.contact-panel,
		.guide-grid {
			grid-template-columns: 1fr;
		}

		.history-row {
			grid-template-columns: 1fr;
			gap: 4px;
		}
	}
</style>
