<script lang="ts">
	import { Grid, Row, Column } from 'carbon-components-svelte';
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

		<h2 class="p-5">FAQ</h2>
		<ol class="pl-6 list-decimal list-inside">
			<li class="pb-2">
				なんのための拡張機能ですか？<br />
				<p class="lg:p-3 md:p-1 sm:px-1 text-sm text-blue-600">
					Googleカレンダーと連携できない<strong>あいどる</strong
					>のスケジュールをいちいち手作業でコピペしてGoogleカレンダーに登録しなくてよくするためのものです。
				</p>
			</li>
			<li class="pb-2">
				画面上のイベントが拡張画面に反映されないときがあります<br />
				<p class="lg:p-3 md:p-1 sm:px-1  text-sm text-blue-600">
					表示が崩れるなどの場合含めてまずはリロードしてください
				</p>
			</li>
			<li class="pb-2">
				Google カレンダー上の変更は<strong>あいどる</strong>に反映されますか？<br />
				<p class="lg:p-3 md:p-1 sm:px-1  text-sm text-blue-600">されません</p>
			</li>
			<li class="pb-2">
				<strong>あいどる</strong
				>上でイベント情報が変更された場合、自動的にGoogleカレンダーに反映されますか？<br />
				<p class="lg:p-3 md:p-1 sm:px-1  text-sm text-blue-600">
					されません。そもそも<strong>あいどる</strong
					>はCalDAV機能を実装しておらず、双方向での情報更新が不可能です。そもそもCalDAV機能が実装されていれば、このChrome拡張を作成する必要はありませんでした。
				</p>
			</li>
			<li class="pb-2">
				脆弱性はありませんか？セキュリティは大丈夫ですか？<br />
				<p class="lg:p-3 md:p-1 sm:px-1  text-sm text-blue-600">
					大丈夫です。心配な方はご利用にならないでください。
				</p>
			</li>
			<li class="pb-2">
				他のサイトでも利用できませんか？<br />
				<p class="lg:p-3 md:p-1 sm:px-1 text-sm text-blue-600">
					できません。<strong>あいどる</strong
					>上でのみ有効になる設定になっています。改造すれば他のサイトでも利用可能です。
				</p>
			</li>
		</ol>
		<h2 class="p-5">TODO<span class="text-sm pl-4">追加予定機能</span></h2>
		
		
		<ol class="pl-6 list-decimal list-inside">
			<li class="">拡張機能またはカレンダーからの出欠操作</li>
		</ol>

		<h2 class="p-5">更新履歴</h2>
		<ul class="pl-6 list-none list-inside">
			<li class="version">
				<strong>v0.4.5</strong>2024-02-25 レイアウト・デザイン修正
			</li><li class="version">
				<strong>v0.4.4</strong>2024-02-25 データフォーマット修正
			</li><li class="version">
				<strong>v0.4.3</strong>2024-02-25 データテーブル化 フィルタ機能
			</li><li class="version">
				<strong>v0.4.2</strong>2024-02-25 組織図ツリー、Carbon Layout 導入
			</li><li class="version">
				<strong>v0.4.1</strong>2024-02-24 終日イベントへの対応、取得中の割り込み禁止対応
			</li>
			<li class="version">
				<strong>v0.4.0</strong>2024-02-24 Google認証エラー対応<br />開発環境と同じテスト用OAuth
				Client IDを利用していた
			</li>
		</ul>
	</div>
</div>

<style>
	li::before {
		font-size: larger;
	}
	li {
		text-indent: -1rem;
		margin-left: 1rem;
		line-height: 1.1rem;
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
</style>
