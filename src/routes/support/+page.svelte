<script lang="ts">
	const supportFormUrl =
		'https://docs.google.com/forms/d/e/1FAIpQLSf5j5-TjUa0nobseMrh7U3l3lWKR_zIN-rUUM52wFP2FagR9w/viewform';

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
			question: '出欠の返信状態はどこに保存されますか？',
			answer: '予定詳細や申込画面で読み取った出欠返信は、ブラウザの localStorage に保存します。これにより一覧やサイドパネルでも未返、出席、欠席の状態を補正できます。'
		},
		{
			question: '予定内容が変わった場合はどうなりますか？',
			answer: '詳細画面から日時、場所、概要、出欠項目を読み直し、Googleカレンダー側のイベントを更新します。差分検知用の fingerprint も保持します。'
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
			question: 'イベント詳細ページに追加されるボタンは何ですか？',
			answer: 'イベント詳細ページには小型ツールバーを追加します。Googleカレンダー同期、告知メールタブを開く、告知メール本文を直接コピーする操作を、サイドパネルを探さずに実行できます。'
		},
		{
			question: '名簿ページに追加されるボタンは何ですか？',
			answer: '名簿ページには「この組織を名簿キャッシュ更新」ボタンを追加します。表示中の組織の名簿をその場でブラウザ内キャッシュへ反映できます。'
		},
		{
			question: 'なぜサイト標準のメール送信ではなく Gmail などで送るのですか？',
			answer: 'サイト標準のメール送信では、送信元や認証の扱いによって受信側で迷惑メール扱いになる可能性があります。Do You Gcal は本文と宛先の準備だけを補助し、実際の送信は送信者が普段使うメール環境で行う設計にしています。'
		},
		{
			question: '告知メールの宛先は重複しますか？',
			answer: '同じメールアドレスは重複しないようにまとめます。複数グループに所属する会員を含めても、BCC には同一メールアドレスが1回だけ入ります。個別除外で特定の会員だけ外すこともできます。'
		},
		{
			question: 'Gmail の下書きは自動作成されますか？',
			answer: 'Gmail API は使いません。Gmail 作成画面を開くときに To と件名だけを渡し、BCC と本文は拡張内のコピー枠から貼り付ける運用です。BCC 送信時は To に自分のメールアドレスを指定してください。To はブラウザ内に保存できます。'
		},
		{
			question: '初回に何をすればよいですか？',
			answer: 'はじめにタブの状態チェックに沿って、設定タブでカレンダーを選び、マイページで組織を検出し、組織管理の組織員一覧を開いて名簿キャッシュを作成してください。その後、マイスケジュールまたは行事活動一覧を開くと予定を検出できます。準備完了後の案内ウィジェットは閉じると再表示しません。'
		},
		{
			question: 'ページ遷移するとサイドパネルは初期状態に戻りますか？',
			answer: '同じブラウザセッション内では、最後に開いていたタブとパネルの開閉状態を sessionStorage に保存して復元します。ログイン直後のトップページでは状態をクリアし、初期状態から始めます。'
		},
		{
			question: '予定検出が毎回未完了になりますか？',
			answer: '一度予定を検出すると、検出件数、検出元 URL、対象月、検出日時をブラウザ内に保存します。現在のページに予定が表示されていなくても、初回セットアップでは前回検出済みとして扱います。'
		},
		{
			question: '表示月は年度をまたいで選べますか？',
			answer: '選べません。対象サイトは年度をまたいだ予定取得に対応していないため、カレンダータブの月選択はサイトで選択中の年度内に限定しています。年度をまたぐ場合は、同友会サイト上部の年度プルダウンを変更してから表示してください。'
		},
		{
			question: '当月の終了済み予定は表示されますか？',
			answer: '表示月の予定は月初から扱います。当月は目アイコンの「終了済」トグルで終了済みイベントを隠せます。今日の予定には「本日」バッジを表示します。'
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

	const changelog = [
		['0.7.x', 'Svelte 5 版サイドパネル、初回セットアップ、状態保持、Googleカレンダー複数参照、年度内月選択、終了済み予定トグル、組織図、名簿タブ、告知メール、出欠返信キャッシュ、申込時同期、案内メール/保管庫リンクを追加'],
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
				<li>初期状態ではメインカレンダーが登録先と参照対象になります。</li>
				<li>必要に応じて Googleカレンダーに「同友会」などの専用カレンダーを作成し、設定タブで登録先や参照対象に追加します。</li>
				<li>参照表示したい同友会関連カレンダーは複数選択できます。</li>
				<li>初回はマイページを開いて、現在の組織名と組織メニューを検出させます。</li>
				<li>組織管理の組織員一覧を開いて、名簿キャッシュを作成します。</li>
				<li>名簿ページ上の「この組織を名簿キャッシュ更新」でも、表示中組織の名簿を更新できます。</li>
				<li>予定はマイスケジュールまたは行事活動一覧を開いて、表示月ごとに検出します。表示月はサイトで選択中の年度内から選びます。</li>
				<li>告知メールを送る場合は、イベント詳細ページの小型ツールバーまたは告知メールタブから本文を作成し、送信先グループを選択します。</li>
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
		</section>
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
		.contact-panel {
			grid-template-columns: 1fr;
		}

		.history-row {
			grid-template-columns: 1fr;
			gap: 4px;
		}
	}
</style>
