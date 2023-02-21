<script lang="ts">
	import { Grid, Row, Column } from 'carbon-components-svelte';
</script>

<div class="p-4 m-4">
	<div class="mb-4 grid grid-flow-row-dense grid-cols-1">
		<h1>サポート情報</h1>
		<p class="p-4">
			Googleカレンダー上で新規にカレンダーを「同友会」などの名前で作成し、そちらに機能拡張からカレンダーイベントをポストするのがおすすめです。<br
			/>
			製作者と連絡を取りたい方はChromeウェブストアのページから<a
				href="https://chrome.google.com/webstore/detail/do-you-gcal/nhgpinmgbpglndjkllhbcjcljbenjbgm?hl=ja&authuser=0"
				>デベロッパーにお問い合わせ</a
			>ください。
		</p>

		<h2 class="p-5">FAQ</h2>
		<ol class="pl-6 list-decimal list-inside">
			<li class="">
				画面上のイベントが拡張画面に反映されないときがあります<br />
				<p class="p-3 text-sm text-blue-600">表示が崩れるなどの場合含めてリロードしてください</p>
			</li>
			<li class="">
				Google カレンダー上の変更は<strong>あいどる</strong>に反映されますか？<br />
				<p class="p-3 text-sm text-blue-600">されません</p>
			</li>
			<li class="">
				<strong>あいどる</strong
				>上でイベント情報が変更された場合、自動的にGoogleカレンダーに反映されますか？<br />
				<p class="p-3 text-sm text-blue-600">
					されません。そもそも「あいどる」はCalDAV機能を実装しておらず、双方向での情報更新が不可能です。
				</p>
			</li>
		</ol>
	</div>
</div>

<style>
	li::before {
		font-size: larger;
	}
</style>
