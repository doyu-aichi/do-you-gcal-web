<script lang="ts">
	const features = [
		{
			title: 'サイドパネル',
			text: '右上の耳タブから開閉。ページを邪魔しないまま、カレンダー、組織図ツリー、設定、ガイドを切り替えられます。'
		},
		{
			title: 'Google カレンダー同期',
			text: '出席予定だけを登録し、欠席のみの予定は登録対象外として扱います。既に登録済みの予定を欠席に変更した場合は Google カレンダーから削除します。'
		},
		{
			title: '複数カレンダー参照',
			text: '同友会関連の Google カレンダーを複数選択して表示。保存先カレンダーはひとつに固定できます。'
		},
		{
			title: '詳細情報の反映',
			text: '詳細画面から場所、概要、複数の出欠項目を読み取り、Google カレンダーの内容に反映します。出欠返信はブラウザ内に記録して一覧表示にも利用します。'
		},
		{
			title: '組織図ツリー',
			text: 'サイトの年度別メニューから所属グループを解析し、親子関係が分かる表示で組織を切り替えられます。下位グループは展開して所属メンバーを確認できます。'
		},
		{
			title: '名簿キャッシュ',
			text: '名簿ページや配信先ページを開いたタイミングで会員名簿をブラウザ内に保存し、所属バッジ、ページング、展開表示で確認できます。'
		},
		{
			title: '関連リンク',
			text: '組織ごとの資料保管庫、スケジュールから案内メール画面への導線を追加します。'
		}
	];

	const steps = [
		'Chrome Web Store から拡張機能をインストールします。',
		'Chrome で Google アカウントにログインします。',
		'あいち同友会のページを開くと、右上に Do You Gcal の耳タブが表示されます。',
		'設定タブで参照するカレンダーと、登録先カレンダーを選択します。',
		'マイスケジュールまたは行事活動から予定を開き、「Google カレンダーへ反映」を有効にして登録します。'
	];
</script>

<svelte:head>
	<title>Do You Gcal | あいち同友会スケジュール補助 Chrome 拡張</title>
	<meta
		name="description"
		content="あいち同友会サイトの予定、組織図ツリー、Google カレンダー同期を補助する Chrome 拡張 Do You Gcal のサポートサイトです。"
	/>
</svelte:head>

<section class="hero">
	<div class="page hero-inner">
		<div class="hero-copy">
			<p class="eyebrow">Chrome Extension for aichi.douyukai</p>
			<h1>Do You Gcal</h1>
			<p class="lead">
				あいち同友会サイトの予定登録、出欠状態、組織切替を Chrome 上で補助する拡張機能です。
				Google カレンダー、組織図ツリー、名簿キャッシュを、同じサイドパネルから扱えるようにします。
			</p>
			<div class="actions">
				<a
					class="button primary"
					href="https://chrome.google.com/webstore/detail/do-you-gcal/nhgpinmgbpglndjkllhbcjcljbenjbgm?hl=ja"
					rel="noreferrer"
				>
					Chrome Web Store
				</a>
				<a class="button" href="/support">サポートを見る</a>
			</div>
		</div>
		<div class="hero-visual panel" aria-label="Do You Gcal の画面イメージ">
			<div class="mock-browser">
				<div class="mock-top">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div class="mock-body">
					<div class="mock-page">
						<div class="mock-line wide"></div>
						<div class="mock-line"></div>
						<div class="mock-calendar">
							{#each Array.from({ length: 9 }) as _, index (index)}
								<div class:active={index === 4 || index === 7}></div>
							{/each}
						</div>
					</div>
					<div class="mock-panel">
						<div class="mock-tab">カレンダー</div>
						<div class="mock-event">
							<strong>G.山田室 例会</strong>
							<span>出席 / Google カレンダー登録済</span>
						</div>
						<div class="mock-event muted">
							<strong>A.西春日井地区役員会</strong>
							<span>名簿 / 案内メール / 保管庫</span>
						</div>
					</div>
					<div class="ear">
						<img src="/icon_32.png" alt="" width="32" height="32" />
						<span>現 在 の 組 織</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="page section">
	<p class="eyebrow">Features</p>
	<h2>拡張で追加されること</h2>
	<div class="grid three feature-grid">
		{#each features as feature (feature.title)}
			<article class="panel feature">
				<h3>{feature.title}</h3>
				<p>{feature.text}</p>
			</article>
		{/each}
	</div>
</section>

<section class="workflow">
	<div class="page section">
		<p class="eyebrow">Workflow</p>
		<h2>使い方</h2>
		<ol class="steps">
			{#each steps as step (step)}
				<li>{step}</li>
			{/each}
		</ol>
	</div>
</section>

<section class="page section notes">
	<div class="panel note">
		<h2>非公式の補助ツールです</h2>
		<p>
			Do You Gcal は愛知県中小企業同友会の公式サービスではありません。対象サイトの画面構造を解析して動作するため、
			サイト側の仕様変更により一部機能が動かなくなる場合があります。
		</p>
	</div>
</section>

<style>
	.hero {
		padding: 58px 0 38px;
	}

	.hero-inner {
		display: grid;
		grid-template-columns: minmax(0, 0.92fr) minmax(420px, 1.08fr);
		gap: 34px;
		align-items: center;
	}

	h1,
	h2,
	h3,
	p {
		margin-top: 0;
	}

	h1 {
		margin-bottom: 16px;
		color: #252525;
		font-size: clamp(2.4rem, 6vw, 5.2rem);
		line-height: 0.96;
		letter-spacing: 0;
	}

	h2 {
		margin-bottom: 20px;
		font-size: clamp(1.7rem, 3vw, 2.35rem);
		line-height: 1.15;
		letter-spacing: 0;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 24px;
	}

	.hero-visual {
		padding: 14px;
		background: #ffffff;
	}

	.mock-browser {
		overflow: hidden;
		background: #f0eadf;
		border: 1px solid #d6cec2;
		border-radius: 8px;
	}

	.mock-top {
		display: flex;
		gap: 7px;
		padding: 11px;
		background: #2c2c2c;
	}

	.mock-top span {
		width: 10px;
		height: 10px;
		background: #faebd7;
		border-radius: 50%;
	}

	.mock-body {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 210px;
		gap: 18px;
		min-height: 320px;
		padding: 20px 54px 20px 20px;
	}

	.mock-page,
	.mock-panel {
		padding: 14px;
		border-radius: 8px;
	}

	.mock-page {
		background: #ffffff;
	}

	.mock-panel {
		color: #faebd7;
		background: rgba(44, 44, 44, 0.9);
		border-left: 4px solid #8bba14;
	}

	.mock-line {
		height: 12px;
		margin-bottom: 10px;
		background: #d8d2c7;
		border-radius: 999px;
	}

	.mock-line.wide {
		width: 74%;
		background: #8bba14;
	}

	.mock-calendar {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 8px;
		margin-top: 26px;
	}

	.mock-calendar div {
		aspect-ratio: 1.25;
		background: #ebe3d7;
		border: 1px solid #d1c5b4;
		border-radius: 6px;
	}

	.mock-calendar .active {
		background: rgba(139, 186, 20, 0.35);
		border-color: #8bba14;
	}

	.mock-tab {
		display: inline-flex;
		margin-bottom: 16px;
		padding: 5px 9px;
		color: #2c2c2c;
		background: #faebd7;
		border-radius: 6px;
		font-weight: 900;
	}

	.mock-event {
		padding: 10px;
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(250, 235, 215, 0.28);
		border-radius: 6px;
	}

	.mock-event + .mock-event {
		margin-top: 10px;
	}

	.mock-event strong,
	.mock-event span {
		display: block;
	}

	.mock-event span {
		margin-top: 4px;
		color: #d7d0c5;
		font-size: 0.78rem;
	}

	.mock-event.muted {
		opacity: 0.82;
	}

	.ear {
		position: absolute;
		right: 0;
		top: 54px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		width: 48px;
		min-height: 146px;
		padding: 10px 5px;
		color: #ffffff;
		background: #8bba14;
		border-radius: 10px 0 0 10px;
		box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.45);
		font-size: 0.72rem;
		font-weight: 900;
		writing-mode: vertical-rl;
	}

	.ear img {
		background: #ffffff;
		border: 1px solid #ffffff;
		border-radius: 50%;
		writing-mode: horizontal-tb;
	}

	.feature {
		padding: 18px;
	}

	.feature h3 {
		margin-bottom: 10px;
		font-size: 1.08rem;
	}

	.feature p,
	.note p {
		margin-bottom: 0;
		color: #514c45;
		line-height: 1.75;
	}

	.workflow {
		background: rgba(44, 44, 44, 0.06);
		border-top: 1px solid rgba(44, 44, 44, 0.08);
		border-bottom: 1px solid rgba(44, 44, 44, 0.08);
	}

	.steps {
		display: grid;
		gap: 12px;
		margin: 0;
		padding: 0;
		counter-reset: step;
		list-style: none;
	}

	.steps li {
		position: relative;
		min-height: 48px;
		padding: 13px 16px 13px 58px;
		background: #ffffff;
		border: 1px solid rgba(44, 44, 44, 0.12);
		border-radius: 8px;
		line-height: 1.6;
	}

	.steps li::before {
		position: absolute;
		left: 14px;
		top: 12px;
		display: grid;
		place-items: center;
		width: 28px;
		height: 28px;
		color: #1f1f1f;
		background: #8bba14;
		border-radius: 50%;
		content: counter(step);
		counter-increment: step;
		font-weight: 900;
	}

	.note {
		padding: 22px;
		border-left: 6px solid #8bba14;
	}

	.notes {
		padding-top: 38px;
	}

	@media (max-width: 900px) {
		.hero-inner {
			grid-template-columns: 1fr;
		}

		.hero-visual {
			order: -1;
		}
	}

	@media (max-width: 560px) {
		.mock-body {
			grid-template-columns: 1fr;
			padding-right: 48px;
		}

		.mock-panel {
			min-height: 180px;
		}
	}
</style>
