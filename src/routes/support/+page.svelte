<script lang="ts">
	import {
		Grid,
		Row,
		Column,
		Tag,
		Link,
		StructuredList,
		StructuredListHead,
		StructuredListRow,
		StructuredListCell,
		StructuredListBody
	} from 'carbon-components-svelte';
	import Launch from 'carbon-icons-svelte/lib/Launch.svelte';
</script>

<svelte:head>
	<title>Do You Gcalサポートサイト | サポートページ</title>
	<meta name="description" content="Do You Gcal" />
</svelte:head>
<div class="lg:p-4 lg:m-4 sm:m-0 sm:p-0">
	<div class="md:mb-4 sm:mb-0 grid grid-flow-row-dense grid-cols-1">
		<h1>サポート情報</h1>
		<p class="p-4">
			Googleカレンダー上で新規にカレンダーを「同友会」などの名前で作成し、そちらに機能拡張からカレンダーイベントをポストするのがおすすめです。<br
			/>
			製作者と連絡を取りたい方はChromeウェブストアのページから<a
				href="https://chrome.google.com/webstore/detail/do-you-gcal/nhgpinmgbpglndjkllhbcjcljbenjbgm?hl=ja&authuser=0"
				>デベロッパーにお問い合わせ</a
			>ください。Chrome バージョン 109.0.5414.119（Official Build）で動作確認しています。
		</p>
		<p class="p-4">
			<strong>あいどる</strong
			>はデフォルトで当月に移動する機能を実装したつもりみたいですが、年度を無視して月移動するため、2023年3月現在、年度を切り替えると勝手に2024年3月に遷移します。<br
			/><strong>ため息しか出ません。</strong>せめて年度頭の4月にしろよ…。<br
			/>そのため反映に不具合が生じていますが、年度が変わればもとに戻ると思います。<br /><strong
				>ベンダーはテストとか検証という言葉をご存じないとしか思えず、つい心配になります。</strong
			>
		</p>
		<h2 class="p-5">FAQ</h2>
		<ol class="pl-6 list-decimal list-inside">
			<li class="pb-2">
				なんのための拡張機能ですか？<br />
				<p class="lg:p-3 md:p-1 sm:px-1 text-sm text-blue-800">
					Googleカレンダーと連携できない<strong>あいどる</strong
					>のスケジュールをいちいち手作業でコピペしてGoogleカレンダーに登録しなくてよくするためのものです。
				</p>
			</li>
			<li class="pb-2">
				スマートフォンに対応していますか？<br />
				<p class="lg:p-3 md:p-1 sm:px-1 text-sm text-blue-800">
					してません。Android、iPhoneともに対応不可能です。Chrome拡張機能がモバイル版Chromeに対応していないので対応予定もありません。
				</p>
			</li>
			<li class="pb-2">
				Chrome以外のブラウザ、EdgeやSafariでも使えますか？<br />
				<p class="lg:p-3 md:p-1 sm:px-1 text-sm text-blue-800">
					使えません。Edgeには将来的に対応するかもしれません。Safariには対応不可能です。
				</p>
			</li>
			<li class="pb-2">
				画面上のイベントが拡張画面に反映されないときがあります<br />
				<p class="lg:p-3 md:p-1 sm:px-1  text-sm text-blue-800">
					表示が崩れるなど含め、不具合時はリロードしてみてください
				</p>
			</li>
			<li class="pb-2">
				Google カレンダー上の変更は<strong>あいどる</strong>に反映されますか？<br />
				<p class="lg:p-3 md:p-1 sm:px-1  text-sm text-blue-800">されません</p>
			</li>
			<li class="pb-2">
				<strong>あいどる</strong
				>上でイベント情報が変更された場合、自動的にGoogleカレンダーに反映されますか？<br />
				<p class="lg:p-3 md:p-1 sm:px-1  text-sm text-blue-800">
					されません。<strong>あいどる</strong
					>はGoogleカレンダー連携を謳ってはいますがCalDAV機能を実装しておらず、双方向での情報更新が不可能です。Googleカレンダーを参照しているだけで連携しているとは言えません。そもそも<strong
						>あいどる</strong
					>にCalDAV機能が実装されていたなら、このChrome拡張を作成する必要はありませんでした。
				</p>
			</li>
			<li class="pb-2">
				脆弱性はありませんか？セキュリティは大丈夫ですか？<br />
				<p class="lg:p-3 md:p-1 sm:px-1  text-sm text-blue-800">
					大丈夫です。心配な方はご利用にならないでください。むしろ<strong>あいどる</strong
					>に脆弱性の懸念があります。
				</p>
			</li>
			<li class="pb-2">
				他のサイトでも利用できませんか？<br />
				<p class="lg:p-3 md:p-1 sm:px-1 text-sm text-blue-800">
					できません。<strong>あいどる</strong
					>上でのみ機能有効になる設定になっています。改造すれば他のサイトでも利用可能です。類似の汎用的な<Link
						icon={Launch}
						href="https://chrome.google.com/webstore/detail/right-click-to-calendar/femihkgadmhfmdlkjjfjcgleppfggadk?hl=ja"
						target="_blank">拡張機能</Link
					>もあるのでご利用を検討してみてください。
				</p>
			</li>
			<li class="pb-2">
				共有パソコンで利用できますか？<br />
				<p class="lg:p-3 md:p-1 sm:px-1  text-sm text-blue-800">
					同じGoogleアカウントを使い回すことは推奨できません。また複数の<strong>あいどる</strong
					>アカウントがある場合、ブラウザに記録されるイベント情報が混在する可能性があります。
				</p>
			</li>
		</ol>
		<h2 class="p-5">TODO<span class="text-sm pl-4">追加予定機能</span></h2>

		<p class="p-4">
			自身の必要とする機能は概ね実装済みなのでモチベーションは低めです。<br />
			所属組織、資料保管庫の一覧性の悪さに耐えきれなくなったら、なんとかするかもしれません。
		</p>

		<ul class="pl-6 list-disc list-inside">
			<li class="">
				資料保管庫の一括バックアップダウンロードまたはGoogle Drive連携（モチベーション 40/100）
			</li>
			<li class="">
				過去に年度を切り替え、さらに所属を変えると非表示なることがあります。機能拡張をオフにしてから再度オンにしてみてください（モチベーション
				40/100）
			</li>
			<li class="">拡張機能またはカレンダーからの直接の出欠操作（モチベーション 30/100）</li>
			<li class="">Microsoft Edge対応（モチベーション 10/100）</li>
			<li class="">Outlook カレンダー連携（モチベーション 5/100）</li>
			<li class="">iCloud カレンダー連携（モチベーション 5/100）</li>
			<li class="">
				ジョルテ カレンダー連携（モチベーション 0/100）Googleカレンダー経由で連携してください
			</li>
			<li class="">
				年度切替（モチベーション 50/100）<Tag size="sm" type="blue">DONE</Tag>
			</li>
		</ul>

		<h2 class="p-5">更新履歴</h2>

		<StructuredList condensed>
			<StructuredListHead>
				<StructuredListRow head>
					<StructuredListCell head>Version</StructuredListCell>
					<StructuredListCell head>Date</StructuredListCell>
					<StructuredListCell head>変更内容</StructuredListCell>
				</StructuredListRow>
			</StructuredListHead>
			<StructuredListBody>
				<StructuredListRow>
					<StructuredListCell head noWrap>v0.5.1</StructuredListCell>
					<StructuredListCell noWrap>2024-03-15</StructuredListCell>
					<StructuredListCell>日付インプット挿入</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell head noWrap>v0.5.0</StructuredListCell>
					<StructuredListCell noWrap>2024-03-13</StructuredListCell>
					<StructuredListCell>行事登録ページでの日付自動入力機能</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell head noWrap>v0.4.11</StructuredListCell>
					<StructuredListCell noWrap>2024-03-09</StructuredListCell>
					<StructuredListCell>
						年度切替を設定から行えるようになりました。所属グループ表示を改良。
					</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell head noWrap>v0.4.10</StructuredListCell>
					<StructuredListCell noWrap>2024-03-02</StructuredListCell>
					<StructuredListCell>所属グループからイベントの判別を一部行うように</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell head noWrap>v0.4.9</StructuredListCell>
					<StructuredListCell noWrap>2024-03-01</StructuredListCell>
					<StructuredListCell>カレンダーリンク修正</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell head noWrap>v0.4.8</StructuredListCell>
					<StructuredListCell noWrap>2024-03-01</StructuredListCell>
					<StructuredListCell noWrap>Google API利用スコープ変更</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell head noWrap>v0.4.7</StructuredListCell>
					<StructuredListCell noWrap>2024-03-01</StructuredListCell>
					<StructuredListCell>Google API利用スコープ変更</StructuredListCell></StructuredListRow
				>
				<StructuredListRow>
					<StructuredListCell head noWrap>v0.4.6</StructuredListCell>
					<StructuredListCell noWrap>2024-02-27</StructuredListCell>
					<StructuredListCell>Google API利用認証対応</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell head noWrap>v0.4.5</StructuredListCell>
					<StructuredListCell noWrap>2024-02-25</StructuredListCell>
					<StructuredListCell>レイアウト・デザイン修正</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell head noWrap>v0.4.4</StructuredListCell>
					<StructuredListCell noWrap>2024-02-25</StructuredListCell>
					<StructuredListCell>データフォーマット修正</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell head noWrap>v0.4.3</StructuredListCell>
					<StructuredListCell noWrap>2024-02-25</StructuredListCell>
					<StructuredListCell>データテーブル化 フィルタ機能</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell head noWrap>v0.4.2</StructuredListCell>
					<StructuredListCell noWrap>2024-02-25</StructuredListCell>
					<StructuredListCell noWrap>組織図ツリー、Carbon Layout 導入</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell head noWrap>v0.4.1</StructuredListCell>
					<StructuredListCell noWrap>2024-02-24</StructuredListCell>
					<StructuredListCell noWrap
						>終日イベントへの対応、取得中の割り込み禁止対応</StructuredListCell
					>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell head noWrap>v0.4.0</StructuredListCell>
					<StructuredListCell noWrap>2024-02-24</StructuredListCell>
					<StructuredListCell>Google認証エラー対応</StructuredListCell>
				</StructuredListRow>
			</StructuredListBody>
		</StructuredList>
	</div>
</div>

<style>
	li::before {
		font-size: larger;
	}
	li :not(*) {
		text-indent: -1rem;
		margin-left: 1rem;
		line-height: 1rem;
	}

	li > p {
		text-indent: 0;
		margin-left: 0rem;
	}
	li.version > strong {
		padding-right: 1rem;
	}
	li.version {
		text-indent: -4em;
		margin-left: 4em;
		line-height: 1.2rem;
	}
	li {
		padding: 0 0 0.4em;
	}
	li > s {
		margin: 0 1rem 0 0;
	}
	:global(.bx--tag) {
		margin: 0 !important;
	}
</style>
