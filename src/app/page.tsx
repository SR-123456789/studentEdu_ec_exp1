"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const mockDataItems = [
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy:
          "【電子書籍なら、スマホ・パソコンの無料アプリで今すぐ読める！】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209112",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "＜p＞Webシステムを「まるごと作る」フルスタック開発体験！＜br /＞ 幅広く活躍できるワンランク上のエンジニアになるために＜/p＞ ＜p＞本書は、Webシステムの「フロントエンド」と「バックエンド」を、一冊でまるごと（＝フルスタックで）作り上げる書籍です。＜/p＞ ＜p＞サンプルアプリケーションの開発を通じて、＜br /＞ ・フロントエンドとバックエンドをどのように連携させるか＜br /＞ ・データ構造／マスタデータをどのように管理するか＜br /＞ ・リポジトリを効率的に管理するにはどうするか＜br /＞ といったポイントを、手を動かしながらひとつひとつ学習できます。実装手段のフレームワークには「Next.js」と「Django」を選定しているため、モダンなWeb開発の全体像を把握することにも役立ちます。＜/p＞ ＜p＞分業化の進む現代的なWeb開発の現場で、あなたが自分の担当外の開発領域についてきちんと理解ができていないと感じるなら、本書は最適の学習書になるはずです。本書を読めば、フロントエンド／バックエンドそれぞれの動作原理や開発テクニックはもちろん、開発のさまざまな工程で効率化を図るためのノウハウを習得できます。＜/p＞ ＜p＞Webシステム開発の全体像を見渡し、現場で幅広く活躍できるフルスタックな視野と知識が身につく一冊です。＜/p＞ ＜p＞■対象読者＜br /＞ ・業務経験2〜3年目のフロントエンドエンジニア／バックエンドエンジニア・担当領域外の開発技術や開発手法を知りたい人・モダンなWeb開発の全体像を把握したいマネージャー／リーダー層＜/p＞ ＜p＞■目次＜br /＞ 【第I部　Webシステム開発の基本】＜br /＞ 第1章　Webシステム開発の基本知識＜br /＞ 第2章　React（Next.js）＋Django（Python）環境の構築＜br /＞ 第3章　VSCode＋Dockerでの開発＜br /＞ 第4章　フロントエンドとバックエンドのシステム連携の基本＜/p＞ ＜p＞【第II部　Webシステム開発の実践】＜br /＞ 第5章　フロントエンドの実装＜br /＞ 第6章　バックエンドの実装とフロントエンドとのシステム連携＜br /＞ 第7章　非同期処理とバッチ処理の実装＜br /＞ 第8章　データ構造・マスタデータの管理＜/p＞ ＜p＞【第III部　現場で役立つ周辺知識】＜br /＞ 第9章　チームビルディング＜br /＞ 第10章　設計＜br /＞ 第11章　Gitによるリポジトリ管理＜/p＞ ＜p＞★読者特典ダウンロードPDF付き＜br /＞ 特典A　アーキテクチャの選定＜br /＞ 特典B　本番環境の構築＜br /＞ ※PDFは翔泳社のサイト上からダウンロードできます。＜/p＞ ＜p＞※本電子書籍は同名出版物を底本として作成しました。記載内容は印刷出版当時のものです。＜br /＞ ※印刷出版再現のため電子書籍としては不要な情報を含んでいる場合があります。＜br /＞ ※印刷出版とは異なる表記・表現の場合があります。予めご了承ください。＜br /＞ ※プレビューにてお手持ちの電子端末での表示状態をご確認の上、商品をお買い求めください。＜/p＞画面が切り替わりますので、しばらくお待ち下さい。 ※ご購入は、楽天kobo商品ページからお願いします。※切り替わらない場合は、こちら をクリックして下さい。 ※このページからは注文できません。",
        itemCode: "rakutenkobo-ebooks:23005447",
        itemName:
          "実装で学ぶフルスタックWeb開発 エンジニアの視野と知識を広げる「一気通貫」型ハンズオン【電子書籍】[ 株式会社オープントーン ]",
        itemPrice: 3630,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 3630,
        itemPriceMax2: 3630,
        itemPriceMax3: 3630,
        itemPriceMin1: 3630,
        itemPriceMin2: 3630,
        itemPriceMin3: 3630,
        itemUrl:
          "https://item.rakuten.co.jp/rakutenkobo-ebooks/c42a3c14c78938ffb8c279c930514569/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/1430/2000014211430.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 2,
        reviewCount: 1,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "rakutenkobo-ebooks",
        shopName: "楽天Kobo電子書籍ストア",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/rakutenkobo-ebooks/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/1430/2000014211430.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "【楽天ブックスならいつでも送料無料】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "101937",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "栗林 健太郎 大原 常徳 技術評論社エリクサージッセンニュウモン キホンブンポウ ウェブカイハツ キカイガクシュウ アイオーティー クリバヤシ ケンタロウ オオハラ ツネノリ 発行年月：2024年02月24日 予約締切日：2023年12月22日 ページ数：424p サイズ：単行本 ISBN：9784297140144 栗林健太郎（クリバヤシケンタロウ） GMOペパボ株式会社で取締役CTOを務めるかたわら、北陸先端科学技術大学院大学博士後期課程に在学中の社会人学生でもあります。IoTシステムへのElixirの応用について研究しています。GMOペパボ（株） 大原常徳（オオハラツネノリ） 株式会社ドリコムでSRE部門のマネージャーをしています。プライベートではErlangを、仕事ではElixirとRubyとHCLを書いています。tokyo．exというElixirのコミュニティを運営しています 大聖寺谷一樹（ダイショウジヤカズキ） 本業では主にKotlinを使った開発していますが、副業でElixirやElmを触ったりしているなんちゃってアルケミスト。（株）UPSIDER 山内修（ヤマウチオサム） 日本マイクロソフト賞4受賞。Elixir本体、Ectoに貢献歴あり。（株）ハウインターナショナル 齋藤和也（サイトウカズヤ） Webのサーバサイド開発やクラウドインフラ構築が得意なエンジニア。普段はRuby　on　Railsを使うことが多いですが、Elixir／Phoenixのお仕事や情報発信もしています。複数社で技術顧問を務めています。（株）スマートアルゴリズム 隆藤唯章（タカフジユイショウ） 僧職系フリーランスプログラマーやってます。前はRailsがメインでしたが、現在はPhoenixメインでお仕事をしています 高瀬英希（タカセヒデキ） 旧くからの組込み屋さん、最近の言い方ではIOT屋さん。ElixrだけでIOTシステムをすべからく包括的に開発できたら楽しい世界になると信じて研究を進めています（本データはこの書籍が刊行された当時に掲載されていたものです） 第1章　Elixir小史／第2章　Elixirの基礎／第3章　基本的な型とパターンマッチ／第4章　モジュール／第5章　Mixを使ったElixirプロジェクトの開発／第6章　並行プログラミング／第7章　Phoenixの概要／第8章　Ectoによるデータベース操作／第9章　phx．gen．authによる認証／第10章　LiveViewによるフロントエンドの開発／第11章　実践的なWebアプリケーションの開発／第12章　行列演算ライブラリNxの概要／第13章　Axonの概要と機械学習システム開発の進め方／第14章　機械学習向けのライブラリ／第15章　実践的なAxonアプリケーションの開発／第16章　Nervesの概要／第17章　Nervesでの開発の進め方／第18章　Elixir　Circuitsによるモジュールの制御／第19章　実践的なIoTアプリケーションの開発 本書は、プログラミング言語Elixirについて、基本的な文法や機能についてひととおり解説するとともに、Webアプリケーションはもとより、機械学習やIoTといった領域における実践的な応用についても解説します。そのため、Elixirのことをあまりよく知らない方々にはもちろんのこと、すでにElixirに馴染みのある方々も含む幅広い読者の皆様にお楽しみいただける書籍になっていると自負します。 本 パソコン・システム開発 その他",
        itemCode: "book:21154847",
        itemName:
          "Elixir実践入門──基本文法、Web開発、機械学習、IoT [ 栗林 健太郎 ]",
        itemPrice: 3740,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 3740,
        itemPriceMax2: 3740,
        itemPriceMax3: 3740,
        itemPriceMin1: 3740,
        itemPriceMin2: 3740,
        itemPriceMin3: 3740,
        itemUrl:
          "https://item.rakuten.co.jp/book/17741712/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0144/9784297140144_1_4.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "book",
        shopName: "楽天ブックス",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/book/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0144/9784297140144_1_4.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "【メール便送料無料、通常24時間以内出荷】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209118",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "著者：山田 祥寛出版社：秀和システムサイズ：単行本ISBN-10：4798024015ISBN-13：9784798024011■通常24時間以内に出荷可能です。※繁忙期やセール等、ご注文数が多い日につきましては　発送まで48時間かかる場合があります。あらかじめご了承ください。 ■メール便は、1冊から送料無料です。※宅配便の場合、2,500円以上送料無料です。※最短翌日配達ご希望の方は、宅配便をご選択下さい。※「代引き」ご希望の方は宅配便をご選択下さい。※配送番号付きのゆうパケットをご希望の場合は、追跡可能メール便（送料210円）をご選択ください。■ただいま、オリジナルカレンダーをプレゼントしております。■お急ぎの方は「もったいない本舗　お急ぎ便店」をご利用ください。最短翌日配送、手数料298円から■まとめ買いの方は「もったいない本舗　おまとめ店」がお買い得です。■中古品ではございますが、良好なコンディションです。決済は、クレジットカード、代引き等、各種決済方法がご利用可能です。■万が一品質に不備が有った場合は、返金対応。■クリーニング済み。■商品画像に「帯」が付いているものがありますが、中古品のため、実際の商品には付いていない場合がございます。■商品状態の表記につきまして・非常に良い：　　使用されてはいますが、　　非常にきれいな状態です。　　書き込みや線引きはありません。・良い：　　比較的綺麗な状態の商品です。　　ページやカバーに欠品はありません。　　文章を読むのに支障はありません。・可：　　文章が問題なく読める状態の商品です。　　マーカーやペンで書込があることがあります。　　商品の痛みがある場合があります。",
        itemCode: "comicset:11421046",
        itemName:
          "【中古】 ASP．NET　MVC実践プログラミング ．NET　Frameworkによる標準Web開発技 / 山田 祥寛 / 秀和システ [単行本]【メール便送料無料】【最短翌日配達対応】",
        itemPrice: 485,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 485,
        itemPriceMax2: 485,
        itemPriceMax3: 485,
        itemPriceMin1: 485,
        itemPriceMin2: 485,
        itemPriceMin3: 485,
        itemUrl:
          "https://item.rakuten.co.jp/comicset/4798024015/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/comicset/cabinet/no_image.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 1,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "comicset",
        shopName: "もったいない本舗　楽天市場店",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/comicset/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/comicset/cabinet/no_image.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [1042656],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "【メール便送料無料、通常24時間以内出荷】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209118",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "著者：Dong Wallace, Isobel Raggell, Joel Aufgang, 平鍋 健児, 高嶋 優子出版社：ピアソン・エデュケーションサイズ：単行本ISBN-10：489471700XISBN-13：9784894717008■通常24時間以内に出荷可能です。※繁忙期やセール等、ご注文数が多い日につきましては　発送まで48時間かかる場合があります。あらかじめご了承ください。 ■メール便は、1冊から送料無料です。※宅配便の場合、2,500円以上送料無料です。※最短翌日配達ご希望の方は、宅配便をご選択下さい。※「代引き」ご希望の方は宅配便をご選択下さい。※配送番号付きのゆうパケットをご希望の場合は、追跡可能メール便（送料210円）をご選択ください。■ただいま、オリジナルカレンダーをプレゼントしております。■お急ぎの方は「もったいない本舗　お急ぎ便店」をご利用ください。最短翌日配送、手数料298円から■まとめ買いの方は「もったいない本舗　おまとめ店」がお買い得です。■中古品ではございますが、良好なコンディションです。決済は、クレジットカード、代引き等、各種決済方法がご利用可能です。■万が一品質に不備が有った場合は、返金対応。■クリーニング済み。■商品画像に「帯」が付いているものがありますが、中古品のため、実際の商品には付いていない場合がございます。■商品状態の表記につきまして・非常に良い：　　使用されてはいますが、　　非常にきれいな状態です。　　書き込みや線引きはありません。・良い：　　比較的綺麗な状態の商品です。　　ページやカバーに欠品はありません。　　文章を読むのに支障はありません。・可：　　文章が問題なく読める状態の商品です。　　マーカーやペンで書込があることがあります。　　商品の痛みがある場合があります。",
        itemCode: "comicset:11170265",
        itemName:
          "【中古】 XPエクストリーム・プログラミングウェブ開発編 / Dong Wallace, Isobel Raggell, Joel Aufgang, 平鍋 健児, 高嶋 優子 / ピアソン・エデ [単行本]【メール便送料無料】【最短翌日配達対応】",
        itemPrice: 1299,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 1299,
        itemPriceMax2: 1299,
        itemPriceMax3: 1299,
        itemPriceMin1: 1299,
        itemPriceMin2: 1299,
        itemPriceMin3: 1299,
        itemUrl:
          "https://item.rakuten.co.jp/comicset/489471700x/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/comicset/cabinet/08250683/bkzprlesynywguzi.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 1,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "comicset",
        shopName: "もったいない本舗　楽天市場店",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/comicset/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/comicset/cabinet/08250683/bkzprlesynywguzi.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [1042656],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "【送料無料】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "101935",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "◆◆◆非常にきれいな状態です。中古商品のため使用感等ある場合がございますが、品質には十分注意して発送いたします。 【毎日発送】 商品状態 著者名 伊藤直也、田中慎司 出版社名 技術評論社 発売日 2010年08月 ISBN 9784774143071",
        itemCode: "vaboo:14568848",
        itemName:
          "【中古】Web開発者のための大規模サ-ビス技術入門 デ-タ構造、メモリ、OS、DB、サ-バ／インフラ /技術評論社/伊藤直也（単行本（ソフトカバー））",
        itemPrice: 840,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 840,
        itemPriceMax2: 840,
        itemPriceMax3: 840,
        itemPriceMin1: 840,
        itemPriceMin2: 840,
        itemPriceMin3: 840,
        itemUrl:
          "https://item.rakuten.co.jp/vaboo/va3073414477u20/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/vaboo/cabinet/books109/9784774143071.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "vaboo",
        shopName: "VALUE BOOKS",
        shopOfTheYearFlag: 1,
        shopUrl:
          "https://www.rakuten.co.jp/vaboo/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/vaboo/cabinet/books109/9784774143071.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [1042656],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "【楽天ブックスならいつでも送料無料】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "101937",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "増井 敏克 技術評論社キソカラノウェブカイハツリテラシー マスイ トシカツ 発行年月：2022年06月22日 予約締切日：2022年05月06日 ページ数：272p サイズ：単行本 ISBN：9784297129071 増井敏克（マスイトシカツ） 増井技術士事務所代表。技術士（情報工学部門）。情報処理技術者試験にも多数合格。ビジネス数学検定1級。「ビジネス」×「数学」×「IT」を組み合わせ、コンピュータを「正しく」「効率よく」使うためのスキルアップ支援や、各種ソフトウェアの開発を行っている（本データはこの書籍が刊行された当時に掲載されていたものです） 第1章　Webの概要／第2章　Webサイトの構成／第3章　Webサーバーへの配置／第4章　Webに関するネットワーク／第5章　Webのセキュリティ／第6章　ECサイトの設計と運用／第7章　ECサイト制作に求められる知識 Webサイト公開までに何をする？開発の全体像から規約まで。いまどきの個人開発学ぶ本。Webアプリ・Webサイトを公開する前に知っておきたいプログラミング技術“以外”の知識。 本 パソコン・システム開発 その他 科学・技術 工学 電気工学",
        itemCode: "book:20666041",
        itemName: "基礎からのWeb開発リテラシー [ 増井 敏克 ]",
        itemPrice: 2530,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 2530,
        itemPriceMax2: 2530,
        itemPriceMax3: 2530,
        itemPriceMin1: 2530,
        itemPriceMin2: 2530,
        itemPriceMin3: 2530,
        itemUrl:
          "https://item.rakuten.co.jp/book/17148448/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9071/9784297129071_1_2.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "book",
        shopName: "楽天ブックス",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/book/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9071/9784297129071_1_2.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy:
          "【電子書籍なら、スマホ・パソコンの無料アプリで今すぐ読める！】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "101937",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "＜p＞WEB+DB PRESS plus徹底攻略シリーズでは，Webアプリケーション開発のためのプログラミング技術情報誌『WEB+DB PRESS』の掲載記事をテーマ別に厳選し，再編集してお届けします。『Web開発の基礎徹底攻略』では，Web技術の整理や歴史のふりかえり，コーディング，さまざまな設計，インフラ，データベース＆SQLといった，Web開発に携わるすべての人にとって必要となる共通の基礎知識を一冊にギュッとまとめました。＜/p＞画面が切り替わりますので、しばらくお待ち下さい。 ※ご購入は、楽天kobo商品ページからお願いします。※切り替わらない場合は、こちら をクリックして下さい。 ※このページからは注文できません。",
        itemCode: "rakutenkobo-ebooks:17810385",
        itemName: "Web開発の基礎徹底攻略【電子書籍】[ WEB+DB PRESS編集部 ]",
        itemPrice: 2068,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 2068,
        itemPriceMax2: 2068,
        itemPriceMax3: 2068,
        itemPriceMin1: 2068,
        itemPriceMin2: 2068,
        itemPriceMin3: 2068,
        itemUrl:
          "https://item.rakuten.co.jp/rakutenkobo-ebooks/eb7a1ad67f2530f4812bf9423c90428c/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/3405/2000006873405.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "rakutenkobo-ebooks",
        shopName: "楽天Kobo電子書籍ストア",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/rakutenkobo-ebooks/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/3405/2000006873405.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "【楽天ブックスならいつでも送料無料】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "101937",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "Eric Matthes 鈴木たかのり 技術評論社サイタンキョリデゼロカラシッカリマナブパイソンニュウモンジッセンヘンゲームカイハツデータカシカウェブカイハツ エリックマッテス スズキタカノリ 発行年月：2020年09月02日 予約締切日：2020年08月19日 ページ数：344p サイズ：単行本 ISBN：9784297115722 原著第2版 マッテス，エリック（Matthes,Eric） アラスカ在住の科学と数学の高校教師。Pythonの入門コースを担当。5歳からプログラムを書いている。現在、教育の非効率さを改善し、さらにオープンソースソフトウェアの利点を教育分野にもたらすようなソフトウェアの作成に注力している 鈴木たかのり（スズキタカノリ） 一般社団法人PyCon　JP　Association副代表理事、株式会社ビープラウド取締役／Python　Climber。部内のサイトを作るためにZope／Ploneと出会い、その後必要にかられてPythonを使いはじめる。Pythonボルダリング部（＃kabepy）部長、Python　mini　Hackーaーthon（＃pyhack）主催、Python　Boot　Camp（＃pycamp）講師、PyCon　JP　2014ー2016座長などの活動をしている 安田善一郎（ヤスダゼンイチロウ） 株式会社Surface＆Architecture所属、株式会社ニューロマジック監査役、シエルセラン合同会社代表。日本IBMを経て（株）ニューロマジックを設立。その後フリーランスとなりPythonベースのPloneをはじめさまざまなCMSでサイト構築（企画・IA・ディレクション）を手がける。現在は主にSurface＆Architectureでデザインプロジェクトのマネジメントに携わっている（本データはこの書籍が刊行された当時に掲載されていたものです） 1　エイリアン侵略ゲーム（弾を発射する宇宙船／エイリアン！／得点を表示する）／2　データの可視化（データを生成する／データをダウンロードする／APIを取り扱う）／3　Webアプリケーション（Djangoをはじめる／ユーザーアカウント／アプリケーションのスタイル設定とデプロイ）／付録 「実践編」では、「エイリアン侵略ゲーム」「データの可視化」「Webアプリケーション」という3つのプロジェクトにチャレンジします。次第に難易度のあがるシューティングゲーム作りを通じて、2Dゲームの開発ができるようになり、大量のデータを調査し、可視化するデータサイエンスのための必須知識を身につけ、そしてWebアプリケーション開発ではアカウントを作成し日記を記入、ログとして保管できるプログラム作成を習得します。「必修編」で学んだ方はもちろん、Pythonの基礎を学んでより実践的な知識を習得したい方も必読です。Windows・Mac・Linux対応。 本 パソコン・システム開発 その他",
        itemCode: "book:20106728",
        itemName:
          "最短距離でゼロからしっかり学ぶ Python入門　実践編　～ゲーム開発・データ可視化・Web開発 [ Eric Matthes ]",
        itemPrice: 3630,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 3630,
        itemPriceMax2: 3630,
        itemPriceMax3: 3630,
        itemPriceMin1: 3630,
        itemPriceMin2: 3630,
        itemPriceMin3: 3630,
        itemUrl:
          "https://item.rakuten.co.jp/book/16431227/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5722/9784297115722.jpg?_ex=128x128",
          },
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5722/9784297115722_2.jpg?_ex=128x128",
          },
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5722/9784297115722_3.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "book",
        shopName: "楽天ブックス",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/book/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5722/9784297115722.jpg?_ex=64x64",
          },
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5722/9784297115722_2.jpg?_ex=64x64",
          },
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5722/9784297115722_3.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "【楽天ブックスならいつでも送料無料】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "101937",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "ウェブ開発の知識とコツをしっかりマスター 宮本麻矢 朝平文彦 技術評論社ブートストラップ フォー フロント エンド カイハツ ノ キョウカショ ミヤモト,マヤ アサヒラ,フミヒコ 発行年月：2018年09月 予約締切日：2018年08月01日 ページ数：467p サイズ：単行本 ISBN：9784297100209 宮本麻矢（ミヤモトマヤ） WINGSプロジェクト所属のフリーライター。専門学校在学中、Webデザインコンペで入賞したことをきっかけに、Webデザインの世界へ。卒業後、文具メーカーにてWeb開発を担当、2013年退職。現在はWebサイトの構築やコンサルティング業務を行うかたわら、執筆活動をしている他、職業訓練校やスクールにてWebやDTPに関するトレーニングを行っている 朝平文彦（アサヒラフミヒコ） 神戸芸術工科大学大学院芸術工学研究科（総合デザイン専攻）修了。建築デザイン、都市計画コンサルタントを経て、現在はWebやグラフィックなどのヴィジュアルコミュニケーション分野のコンサルティング・制作業務を行っている。また、大学や職業訓練校の講師としてクリエイター育成にも尽力している 山田祥寛（ヤマダヨシヒロ） フリーライター。Microsoft　MVP　for　Visual　Studio　and　Development　Technologies。執筆コミュニティ「WINGSプロジェクト」の代表でもある（本データはこの書籍が刊行された当時に掲載されていたものです） 第1章　イントロダクション／第2章　Bootstrapのレイアウト／第3章　基本的なスタイリング／第4章　基本的なコンポーネント／第5章　ナビゲーションのコンポーネント／第6章　フォームとボタンのコンポーネント／第7章　JavaScriptを利用したコンポーネント／第8章　ユーティリティ／第9章　Bootstrapでモックアップを作る／第10章　Bootstrapのカスタマイズ ウェブ開発の知識とコツをしっかりマスター。CSSフレームワークやグリッドデザインの基本から、独自テーマによるカスタマイズ方法まで。Bootstrap4の全機能がこの1冊でわかる！一歩先を目指すWebデザイナー＆Webエンジニアにおすすめ！ 本 パソコン・システム開発 その他 科学・技術 工学 電気工学",
        itemCode: "book:19269358",
        itemName:
          "Bootstrap4フロントエンド開発の教科書 ウェブ開発の知識とコツをしっかりマスター [ 宮本麻矢 ]",
        itemPrice: 3608,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 3608,
        itemPriceMax2: 3608,
        itemPriceMax3: 3608,
        itemPriceMin1: 3608,
        itemPriceMin2: 3608,
        itemPriceMin3: 3608,
        itemUrl:
          "https://item.rakuten.co.jp/book/15583448/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0209/9784297100209.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 4,
        reviewCount: 1,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "book",
        shopName: "楽天ブックス",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/book/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0209/9784297100209.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209118",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "末次章(著者)販売会社/発売会社：日経BP社発売年月日：2019/02/24JAN：9784822254537",
        itemCode: "bookoffonline:15349329",
        itemName:
          "【中古】 AngularによるモダンWeb開発［基礎編］　第2版 AngularでPWAを開発してネイティブと同等の快適さを実現／末次章(著者)",
        itemPrice: 1936,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 1936,
        itemPriceMax2: 1936,
        itemPriceMax3: 1936,
        itemPriceMin1: 1936,
        itemPriceMin2: 1936,
        itemPriceMin3: 1936,
        itemUrl:
          "https://item.rakuten.co.jp/bookoffonline/0019210872/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/645/0019210872l.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 1,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "bookoffonline",
        shopName: "ブックオフ 楽天市場店",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/bookoffonline/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/645/0019210872l.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "【送料無料】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209103",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "◆◆◆非常にきれいな状態です。中古商品のため使用感等ある場合がございますが、品質には十分注意して発送いたします。 【毎日発送】 商品状態 著者名 宮本麻矢、朝平文彦 出版社名 技術評論社 発売日 2018年9月8日 ISBN 9784297100209",
        itemCode: "vaboo:16968968",
        itemName:
          "【中古】Bootstrap4フロントエンド開発の教科書 ウェブ開発の知識とコツをしっかりマスター /技術評論社/宮本麻矢（単行本（ソフトカバー））",
        itemPrice: 422,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 422,
        itemPriceMax2: 422,
        itemPriceMax3: 422,
        itemPriceMin1: 422,
        itemPriceMin2: 422,
        itemPriceMin3: 422,
        itemUrl:
          "https://item.rakuten.co.jp/vaboo/va0207710429u20/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/vaboo/cabinet/noimage.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "vaboo",
        shopName: "VALUE BOOKS",
        shopOfTheYearFlag: 1,
        shopUrl:
          "https://www.rakuten.co.jp/vaboo/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/vaboo/cabinet/noimage.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy:
          "【電子書籍なら、スマホ・パソコンの無料アプリで今すぐ読める！】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "101937",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "＜p＞Seasar2はJavaの設定や定型の開発サイクルを自動化することで，スクリプト言語のようにアプリケーションを動作させながら開発することを可能にします。この開発手法を「スーパーアジャイル」と呼びます。本書は，Seasar2上で行うJavaによるスーパーアジャイルな開発の魅力と快適さを，豊富な画面例とともに紹介します。＜/p＞画面が切り替わりますので、しばらくお待ち下さい。 ※ご購入は、楽天kobo商品ページからお願いします。※切り替わらない場合は、こちら をクリックして下さい。 ※このページからは注文できません。",
        itemCode: "rakutenkobo-ebooks:17810370",
        itemName:
          "Seasar2によるスーパーアジャイルなWeb開発【電子書籍】[ ひがやすを ]",
        itemPrice: 2618,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 2618,
        itemPriceMax2: 2618,
        itemPriceMax3: 2618,
        itemPriceMin1: 2618,
        itemPriceMin2: 2618,
        itemPriceMin3: 2618,
        itemUrl:
          "https://item.rakuten.co.jp/rakutenkobo-ebooks/015cb88c2a8c3139bd5e007aa3815ee2/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/3349/2000006873349.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "rakutenkobo-ebooks",
        shopName: "楽天Kobo電子書籍ストア",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/rakutenkobo-ebooks/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/3349/2000006873349.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "【楽天ブックスならいつでも送料無料】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "101937",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "Eric Matthes 鈴木 たかのり 技術評論社カイテイシンパンサイタンキョリデゼロカラシッカリマナブパイソンニュウモンジッセンヘンゲームカイハツデータカシカウェブカイハツ エリックマッテス スズキ タカノリ 発行年月：2024年10月31日 予約締切日：2024年08月29日 ページ数：360p サイズ：単行本 ISBN：9784297145262 本 パソコン・システム開発 その他",
        itemCode: "book:21372833",
        itemName:
          "改訂新版 最短距離でゼロからしっかり学ぶ Python 入門 実践編　～ゲーム開発・データ可視化・Web開発 [ Eric Matthes ]",
        itemPrice: 3850,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 3850,
        itemPriceMax2: 3850,
        itemPriceMax3: 3850,
        itemPriceMin1: 3850,
        itemPriceMin2: 3850,
        itemPriceMin3: 3850,
        itemUrl:
          "https://item.rakuten.co.jp/book/17989277/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5262/9784297145262_1_12.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "book",
        shopName: "楽天ブックス",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/book/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5262/9784297145262_1_12.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy:
          "【電子書籍なら、スマホ・パソコンの無料アプリで今すぐ読める！】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209118",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "＜p＞本書は、「Angular2 によるモダンWeb 開発〜TypeScriptを使った基本プログラミング〜」の続編です。この前書で得た知識を土台に対象範囲をブラウザ内からWebサーバーやデータベースなどのバックエンド連携を含むシステム全体に広げ、大規模システムの構築にも対応する実践的知識の習得を目指します。AngularやモダンWeb開発に興味を持つ個人から、プロの開発者まで幅広くお読みいただけます。＜br /＞ ネット検索で入手できるAngular単体の技術解説ではなく、実装パターンや外部ライブラリとの統合など、本格的なモダンWebシステムの開発を成功させるための情報を網羅し、以下の特徴を持った内容としました。＜/p＞ ＜p＞●モダンWebを体感するサンプルアプリ＜br /＞ ●様々なツールを使用した読者参加型の学習体験＜br /＞ ●モダンWeb開発のトラブル回避＜br /＞ ●新技術への対応＜br /＞ ●バックエンド関連用語(付録)＜/p＞画面が切り替わりますので、しばらくお待ち下さい。 ※ご購入は、楽天kobo商品ページからお願いします。※切り替わらない場合は、こちら をクリックして下さい。 ※このページからは注文できません。",
        itemCode: "rakutenkobo-ebooks:17548273",
        itemName:
          "AngularによるモダンWeb開発　実践編　実際の開発で必要な知識を凝縮【電子書籍】[ 末次 章 ]",
        itemPrice: 3850,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 3850,
        itemPriceMax2: 3850,
        itemPriceMax3: 3850,
        itemPriceMin1: 3850,
        itemPriceMin2: 3850,
        itemPriceMin3: 3850,
        itemUrl:
          "https://item.rakuten.co.jp/rakutenkobo-ebooks/f02e78a39537375b9f7aefaa40a47e98/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/3371/2000006523371.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "rakutenkobo-ebooks",
        shopName: "楽天Kobo電子書籍ストア",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/rakutenkobo-ebooks/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/3371/2000006523371.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy:
          "【電子書籍なら、スマホ・パソコンの無料アプリで今すぐ読める！】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209104",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "＜p＞［この電子書籍は固定型レイアウトです。リフロー型と異なりビューア機能が制限されます（※）］　　コンポーネントやCSSプリプロセッサを意識した設計・管理の実践など、「ちゃんとCSSを書く」ためのプロの考え方を徹底解説！破綻しやすいCSS、セレクタのリファクタリングなどの基本から、OOCSS、SMACSS、BEMなどのコンポーネント設計のアイデア、実際によくあるパターンのコードの組み方までを丁寧に解説しています。　　※固定型レイアウトはページを画像化した構造であるため、ページの拡大縮小を除く機能は利用できません。また、モノクロ表示の端末ではカラーページ部分で一部見づらい場合があります。＜/p＞画面が切り替わりますので、しばらくお待ち下さい。 ※ご購入は、楽天kobo商品ページからお願いします。※切り替わらない場合は、こちら をクリックして下さい。 ※このページからは注文できません。",
        itemCode: "rakutenkobo-ebooks:13503680",
        itemName:
          "Web制作者のためのCSS設計の教科書 モダンWeb開発に欠かせない「修正しやすいCSS」の設計手法【電子書籍】[ 谷 拓樹 ]",
        itemPrice: 2090,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 2090,
        itemPriceMax2: 2090,
        itemPriceMax3: 2090,
        itemPriceMin1: 2090,
        itemPriceMin2: 2090,
        itemPriceMin3: 2090,
        itemUrl:
          "https://item.rakuten.co.jp/rakutenkobo-ebooks/29ad5d3839513e92a1cedbd484456238/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/7973/2000002217973.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "rakutenkobo-ebooks",
        shopName: "楽天Kobo電子書籍ストア",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/rakutenkobo-ebooks/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/7973/2000002217973.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "【楽天ブックスならいつでも送料無料】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "101937",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "型安全なJavaScriptでWeb開発を加速する Josh Goldberg 今村 謙士 オライリー・ジャパンハジメテノタイプスクリプト ジョシュ ゴールドバーグ イマムラ ケンジ 発行年月：2023年06月16日 予約締切日：2023年04月25日 ページ数：336p サイズ：単行本 ISBN：9784814400362 Goldberg，Josh（ゴールドバーグ，ジョシュ） ニューヨーク出身のフロントエンド開発者。オープンソース、静的解析、Webに熱心に取り組んでいる。フルタイムのオープンソース管理者であり、TypeScriptとそのエコシステムのオープンソースプロジェクト（typescriptーeslintやTypeStatなど）に常に貢献している。過去の仕事には、CodecademyのTypeScriptの使い方の指導、そのTypeScript入門コースの作成支援、Microsoft社でのリッチクライアントアプリケーションの設計などがある。彼のプロジェクトは、静的解析からメタ言語、ブラウザーでのレトロゲームの再現、さらには猫に至るまで、多岐にわたる 今村謙士（イマムラケンジ） ソフトウェアエンジニア。学生時代は生物物理学専攻だったが、社会人になってからプログラミングを開始。主にWebアプリケーション開発に従事。TypeScriptはリリース（2012年）の翌年から使っている古参勢で、その型システムの表現力の高さに惚れ込んでいる。現在はIndeed　Japan株式会社に勤務。趣味は登山 原隆文（ハラタカフミ） 1965年長野県に生まれる。マニュアル翻訳会社、ソフトウェア開発会社を経て独立（本データはこの書籍が刊行された当時に掲載されていたものです） 第1部　TypeScriptの概念（JavaScriptからTypeScriptへ／型システム　ほか）／第2部　TypeScriptの機能（関数／配列　ほか）／第3部　TypeScriptの使用（宣言ファイル／IDE機能の使用　ほか）／第4部　課外講義（構文の拡張／型演算） TypeScriptの本格的な入門書。TypeScriptは、世界で最もよく使われ、かつ最も好まれているプログラミング言語の1つです。本書では、JavaScriptの基礎的な知識のあるプログラマーを対象に、「型」や「型システム」の基本から、明快かつ包括的にTypeScriptを解説します。TypeScriptはバグやタイプミスを防ぎ、コードを読みやすくするのに有用なだけでなく、JavaScriptがどのように動くべきかを宣言し、それを維持するのに役立つ優れたシステムです。読者は本書を読むことで、TypeScriptの基礎と最も重要な機能をマスターできるでしょう。 本 パソコン・システム開発 インターネット・WEBデザイン JavaScript パソコン・システム開発 プログラミング その他 パソコン・システム開発 その他 科学・技術 工学 電気工学",
        itemCode: "book:20954942",
        itemName:
          "初めてのTypeScript 型安全なJavaScriptでWeb開発を加速する [ Josh Goldberg ]",
        itemPrice: 3740,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 3740,
        itemPriceMax2: 3740,
        itemPriceMax3: 3740,
        itemPriceMin1: 3740,
        itemPriceMin2: 3740,
        itemPriceMin3: 3740,
        itemUrl:
          "https://item.rakuten.co.jp/book/17499604/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0362/9784814400362_1_3.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "book",
        shopName: "楽天ブックス",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/book/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0362/9784814400362_1_3.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "【楽天ブックスならいつでも送料無料】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209130",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "プロが選んだ三ツ星レシピ Programmer’s　recipe 藤本壱 翔泳社ワードプレス ウェブ カイハツ ギャクビキ レシピ フジモト,ハジメ 発行年月：2016年03月15日 ページ数：479p サイズ：単行本 ISBN：9784798143774 藤本壱（フジモトハジメ） 1969年兵庫県伊丹市生まれ。神戸大学工学部電子工学科を卒業後、パッケージソフトメーカーの開発職を経て、現在ではパソコンおよびマネー関連のフリーライターとして活動している（本データはこの書籍が刊行された当時に掲載されていたものです） テーマをカスタマイズしたい／テンプレートをカスタマイズしたい／投稿や固定ページを制御したい／画像やメディアを制御したい／カテゴリーやタグを制御したい／コメントを制御したい／サイドバーを制御したい／条件によって出力を分けたい／カスタム投稿タイプ／カスタム分類を使いたい／WordPressのデータを制御したい／アクセスアップやソーシャルメディア対応を行いたい／フックを活用したい／プラグインでWordPressを強化したい／システム周りの設定等を行いたい／各種の機能を使いたい 達人が選んだ珠玉の現場ワザ。PHPによる投稿・タグの制御からプラグインの開発まで。「困った」を解決。抜群の検索性。現場ですぐ使える。 本 パソコン・システム開発 アプリケーション WORD 科学・技術 工学 電気工学",
        itemCode: "book:17775467",
        itemName:
          "WordPress　Web開発逆引きレシピ プロが選んだ三ツ星レシピ （Programmer’s　recipe） [ 藤本壱 ]",
        itemPrice: 3080,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 3080,
        itemPriceMax2: 3080,
        itemPriceMax3: 3080,
        itemPriceMin1: 3080,
        itemPriceMin2: 3080,
        itemPriceMin3: 3080,
        itemUrl:
          "https://item.rakuten.co.jp/book/13703908/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3774/9784798143774.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "book",
        shopName: "楽天ブックス",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/book/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3774/9784798143774.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy:
          "【電子書籍なら、スマホ・パソコンの無料アプリで今すぐ読める！】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209118",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "画面が切り替わりますので、しばらくお待ち下さい。 ※ご購入は、楽天kobo商品ページからお願いします。※切り替わらない場合は、こちら をクリックして下さい。 ※このページからは注文できません。",
        itemCode: "rakutenkobo-ebooks:18787031",
        itemName: "Web開発のためのMySQL超入門【電子書籍】[ 掌田津耶乃 ]",
        itemPrice: 3366,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 3366,
        itemPriceMax2: 3366,
        itemPriceMax3: 3366,
        itemPriceMin1: 3366,
        itemPriceMin2: 3366,
        itemPriceMin3: 3366,
        itemUrl:
          "https://item.rakuten.co.jp/rakutenkobo-ebooks/663a62ee232931d7b3397395023332aa/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/3334/2000008013334.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "rakutenkobo-ebooks",
        shopName: "楽天Kobo電子書籍ストア",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/rakutenkobo-ebooks/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/3334/2000008013334.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209118",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "掌田津耶乃，原一浩【著】販売会社/発売会社：翔泳社発売年月日：2013/12/18JAN：9784798133928",
        itemCode: "bookoffonline:12701653",
        itemName:
          "【中古】 Play　Framework　2徹底入門 JavaではじめるアジャイルWeb開発／掌田津耶乃，原一浩【著】",
        itemPrice: 220,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 220,
        itemPriceMax2: 220,
        itemPriceMax3: 220,
        itemPriceMin1: 220,
        itemPriceMin2: 220,
        itemPriceMin3: 220,
        itemUrl:
          "https://item.rakuten.co.jp/bookoffonline/0017095484/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/497/0017095484l.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 1,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "bookoffonline",
        shopName: "ブックオフ 楽天市場店",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/bookoffonline/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/497/0017095484l.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209118",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "ひがやすを【著】販売会社/発売会社：技術評論社発売年月日：2008/04/25JAN：9784774134369",
        itemCode: "bookoffonline:13652079",
        itemName:
          "【中古】 Seasar2によるスーパーアジャイルなWeb開発 WEB＋DB　PRESS　plusシリーズ／ひがやすを【著】",
        itemPrice: 385,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 385,
        itemPriceMax2: 385,
        itemPriceMax3: 385,
        itemPriceMin1: 385,
        itemPriceMin2: 385,
        itemPriceMin3: 385,
        itemUrl:
          "https://item.rakuten.co.jp/bookoffonline/0015829036/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/2041/0015829036l.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 1,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "bookoffonline",
        shopName: "ブックオフ 楽天市場店",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/bookoffonline/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/2041/0015829036l.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "",
        creditCardFlag: 1,
        endTime: "",
        genreId: "101935",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "出荷目安の詳細はこちら内容詳細本書はWordPressによるWeb開発で困った時に活用するTIPS集です。WordPressを自由自在に操る方法を解説。",
        itemCode: "hmvjapan:13473853",
        itemName:
          "WordPress　Web開発逆引きレシピ WordPress4.x / PHP7対応 PROGRAMMER’S　RECIPE / 藤本壱 【本】",
        itemPrice: 3080,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 3080,
        itemPriceMax2: 3080,
        itemPriceMax3: 3080,
        itemPriceMin1: 3080,
        itemPriceMin2: 3080,
        itemPriceMin3: 3080,
        itemUrl:
          "https://item.rakuten.co.jp/hmvjapan/6883541/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/hmvjapan/cabinet/6884000/6883541.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 1,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "hmvjapan",
        shopName: "HMV＆BOOKS online 1号店",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/hmvjapan/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/hmvjapan/cabinet/6884000/6883541.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy:
          "【電子書籍なら、スマホ・パソコンの無料アプリで今すぐ読める！】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209118",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "＜h2＞＜strong＞【さまざま領域に活用範囲を広げる、新進気鋭の言語のポテンシャル】＜/strong＞＜/h2＞ ＜p＞本書は、Elixirの言語仕様と実践的な利用方法を解説した入門書です。＜br /＞ Elixirは、低遅延で高い可用性を要求される分散システムの構築と運用を目的とするErlang VM上で動作する言語で、その文法はRubyから大きく影響を受けています。ゲームやチャットプラットフォームなど大量のコネクションとトラフィックを扱う必要のあるシステムを構築するのに利用されています。有用なツールやライブラリが多数開発されているのも後押しとなり、近年ではさまざまな分野に活躍の場を広げつつあります。＜br /＞ 本書では、Webアプリケーション、機械学習、IoTなどでのElixirの活用方法を解説します。サンプルアプリケーションを開発しながらコードを紹介しつつ解説しています。Phoenix、Nx、Livebook、Nervesといったツールやライブラリの実践的な活用方法も紹介しているので、今の開発に即した実践的な知識が身に付けられます。＜/p＞ ＜h2＞＜strong＞■こんな方におすすめ＜/strong＞＜/h2＞ ＜p＞・なんらかのプログラミング言語（C、C++、Ruby、Python、JavaScriptなど）を習得している人で、新しい言語としてElixirを習得したい人＜/p＞ ＜h2＞＜strong＞■目次＜/strong＞＜/h2＞ ＜p＞＜strong＞第1章：Elixir小史＜/strong＞＜br /＞ 　　Elixir言語の特徴＜br /＞ 　　Erlang/OTP──Elixirの実行基盤＜br /＞ 　　Elixirの誕生＜br /＞ 　　Elixirの持つポテンシャル＜br /＞ 　　まとめ＜br /＞ ＜strong＞第2章：Elixirの基礎＜/strong＞＜br /＞ 　　Elixirのインストール＜br /＞ 　　Elixirコードの実行方法＜br /＞ 　　基本的な文法＜br /＞ 　　制御フロー＜br /＞ 　　まとめ＜br /＞ ＜strong＞第3章：基本的な型とパターンマッチ＜/strong＞＜br /＞ 　　基本的な型＜br /＞ 　　シジル──リテラルを表現する記法＜br /＞ 　　パターンマッチ──データとパターンの照合＜br /＞ 　　まとめ＜br /＞ ＜strong＞第4章：モジュール＜/strong＞＜br /＞ 　　モジュールと関数によるプログラムの構造化＜br /＞ 　　String──文字列操作を扱う標準モジュール＜br /＞ 　　File──ファイル操作を行う標準モジュール＜br /＞ 　　IO──標準入出力を扱う標準モジュール＜br /＞ 　　Enum──コレクションを「いい感じ」に扱う標準モジュール＜br /＞ 　　Map──マップを「いい感じ」に扱う標準モジュール＜br /＞ 　　Stream──コレクションを遅延評価する標準モジュール＜br /＞ 　　ExUnit──Elixirの単体テスト標準モジュール＜br /＞ 　　まとめ＜br /＞ ＜strong＞第5章：Mixを使ったElixirプロジェクトの開発＜/strong＞＜br /＞ 　　Mixの基本的な使い方＜br /＞ 　　Mixタスク──Elixir開発を支える便利なコマンド＜br /＞ 　　開発に便利なTips＜br /＞ 　　まとめ＜br /＞ ＜strong＞第6章：並行プログラミング＜/strong＞＜br /＞ 　　プロセスによる並行プログラミングの実現＜br /＞ 　　OTPによる並行プログラミングの実現＜br /＞ 　　まとめ＜br /＞ ＜strong＞第7章：Phoenixの概要＜/strong＞＜br /＞ 　　Phoenixとは何か──Elixir製のWebアプリケーションフレームワーク＜br /＞ 　　Phoenixの基礎知識＜br /＞ 　　Phoenixの基本的な使い方＜br /＞ 　　まとめ＜br /＞ ＜strong＞第8章：Ectoによるデータベース操作＜/strong＞＜br /＞ 　　Ectoとは何か──Elixir製のデータベースライブラリ＜br /＞ 　　Ectoの基礎知識＜br /＞ 　　Ectoの基本的な使い方＜br /＞ 　　まとめ＜br /＞ ＜strong＞第9章：phx.gen.authによる認証＜/strong＞＜br /＞ 　　phx.gen.authとは何か──ビルトインのMixタスク＜br /＞ 　　phx.gen.authの基礎知識＜br /＞ 　　phx.gen.authの基本的な使い方＜br /＞ 　　まとめ＜br /＞ ＜strong＞第10章：LiveViewによるフロントエンドの開発＜/strong＞＜br /＞ 　　LiveViewとは何か──Elixirで実装するリアルタイムWeb＜br /＞ 　　LiveViewの基礎知識＜br /＞ 　　LiveViewの実践的な使い方＜br /＞ 　　まとめ＜br /＞ ＜strong＞第11章：実践的なWebアプリケーションの開発＜/strong＞＜br /＞ 　　ブログアプリケーションRealWorldの実装＜br /＞ 　　記事のCRUD機能の開発＜br /＞ 　　コメント機能の開発＜br /＞ 　　タグ機能の開発＜br /＞ 　　認証機能の開発＜br /＞ 　　LiveViewによるRealWorldの開発＜br /＞ 　　デプロイ＜br /＞ 　　まとめ＜br /＞ ＜strong＞第12章：行列演算ライブラリNxの概要＜/strong＞＜br /＞ 　　Nxとは何か＜br /＞ 　　Nxの基本的な使い方＜br /＞ 　　まとめ＜br /＞ ＜strong＞第13章：Axonの概要と機械学習システム開発の進め方＜/strong＞＜br /＞ 　　Axonとは何か＜br /＞ 　　Axonの基本的な使い方＜br /＞ 　　SciDataとNxによる学習データの準備＜br /＞ 　　Axonによるモデルの構築＜br /＞ 　　Axon.Loopによるモデルの学習と可視化＜br /＞ 　　Axon.Loopによるモデルの検証＜br /＞ 　　Axon.predict/4──推論の実行＜br /＞ 　　まとめ＜br /＞ ＜strong＞第14章：機械学習向けのライブラリ＜/strong＞＜br /＞ 　　Kino──Livebook用のUIライブラリ＜br /＞ 　　StbImage──軽量画像読み書きライブラリ＜br /＞ 　　Evision──OpenCVラッパー＜br /＞ 　　Bumblebee──学習済みTransformerモデル提供ライブラリ＜br /＞ 　　まとめ＜br /＞ ＜strong＞第15章：実践的なAxonアプリケーションの開発＜/strong＞＜br /＞ 　　画像分類を行うWebアプリケーションの実装＜br /＞ 　　LiveViewページの作成＜br /＞ 　　ファイルアップロード機能の実装＜br /＞ 　　学習済みモデルでの画像分類機能の実装＜br /＞ 　　まとめ＜br /＞ ＜strong＞第16章：Nervesの概要＜/strong＞＜br /＞ 　　Nervesとは何か＜br /＞ 　　Nervesの動作するIoTボード＜br /＞ 　　まとめ＜br /＞ ＜strong＞第17章：Nervesでの開発の進め方＜/strong＞＜br /＞ 　　用意するもの＜br /＞ 　　Nervesプロジェクトの基本的な開発の進め方＜br /＞ 　　まとめ＜br /＞ ＜strong＞第18章：Elixir Circuitsによるモジュールの制御＜/strong＞＜br /＞ 　　Elixir Circuitsとは何か──Elixir/Nerves向けのモジュール制御ライブラリ＜br /＞ 　　モジュールの通信方式＜br /＞ 　　用意するもの＜br /＞ 　　Elixir Circuitsの使い方＜br /＞ 　　まとめ＜br /＞ ＜strong＞第19章：実践的なIoTアプリケーションの開発＜/strong＞＜br /＞ 　　開発するもの＜br /＞ 　　データ受け取りサーバの作成＜br /＞ 　　データのリアルタイム表示部の作成＜br /＞ 　　データ送信モジュールの作成＜br /＞ 　　ボタンの押下によるデータ測定＜br /＞ 　　まとめ＜/p＞ ＜h2＞＜strong＞■著者プロフィール＜/strong＞＜/h2＞ ＜p＞＜strong＞栗林 健太郎＜/strong＞：GMOペパボ株式会社で取締役CTOを務めるかたわら、北陸先端科学技術大学院大学博士後期課程に在学中の社会人学生でもあります。IoTシステムへのElixirの応用について研究しています。Erlang/OTPとElixirは、基盤としてのErlangの誕生から40年近く経った今も常に未来を指し示しているところが好きです。＜br /＞ ＜strong＞大原 常徳＜/strong＞：株式会社ドリコムでSRE部門のマネージャーをしています。プライベートではErlangを、仕事ではElixirとRubyとHCLを書いています。tokyo.exというElixirのコミュニティを運営しています。＜br /＞ ＜strong＞大聖寺谷 一樹＜/strong＞：本業では主にKotlinを使った開発していますが、副業でElixirやElmを触ったりしているなんちゃってアルケミスト。Elixirの好きなところはイミュータブルなところとパターンマッチ。＜br /＞ ＜strong＞山内 修＜/strong＞：名乗るほどのものではございませんが、山内修です。日本マイクロソフト賞4受賞。Elixir本体、Ectoに貢献歴あり。We are the alchemists, my friends!Elixirの好きなところは、＞とコミュニティがあたたかいところ。＜br /＞ ＜strong＞齋藤 和也＜/strong＞：Webのサーバサイド開発やクラウドインフラ構築が得意なエンジニア。普段はRuby on Railsを使うことが多いですが、Elixir/Phoenixのお仕事や情報発信もしています。複数社で技術顧問を務めています。＜br /＞ ＜strong＞隆藤 唯章＜/strong＞：僧職系フリーランスプログラマーやってます。前はRailsがメインでしたが、現在はPhoenixメインでお仕事をしています。ElixirMobileというElixirのコミュニティのオーガナイザーをしています。最近はElixirでモバイルアプリの開発、モバイルアプリと機械学習との連携についての研究を行っています。＜br /＞ ＜strong＞高瀬 英希＜/strong＞：旧くからの組込み屋さん、最近の言い方ではIoT屋さん。ElixirだけでIoTシステムをすべからく包括的に開発できたら楽しい世界になると信じて研究を進めています。Elixir完全に理解したい。ROS（Robot Opera画面が切り替わりますので、しばらくお待ち下さい。 ※ご購入は、楽天kobo商品ページからお願いします。※切り替わらない場合は、こちら をクリックして下さい。 ※このページからは注文できません。",
        itemCode: "rakutenkobo-ebooks:23263158",
        itemName:
          "Elixir実践入門──基本文法、Web開発、機械学習、IoT【電子書籍】[ 栗林 健太郎 ]",
        itemPrice: 3740,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 3740,
        itemPriceMax2: 3740,
        itemPriceMax3: 3740,
        itemPriceMin1: 3740,
        itemPriceMin2: 3740,
        itemPriceMin3: 3740,
        itemUrl:
          "https://item.rakuten.co.jp/rakutenkobo-ebooks/5029030836de3b37b957209d1eb58549/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/0066/2000014650066.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "rakutenkobo-ebooks",
        shopName: "楽天Kobo電子書籍ストア",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/rakutenkobo-ebooks/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/0066/2000014650066.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "翔泳社",
        creditCardFlag: 1,
        endTime: "",
        genreId: "101937",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "翔泳社 ウェブアプリケーション 467P　23cm ジツソウ　デ　マナブ　フル　スタツク　ウエブ　カイハツ　ジツソウ／デ／マナブ／フル／スタツク／WEB／カイハツ　エンジニア　ノ　シヤ　ト　チシキ　オ　ヒロゲル　イツキ　ツウカンガタ　ハンズ　オン サトウ，ダイスケ　イトウ，ナオキ　ウエノ，ケイジ",
        itemCode: "tc-books:10607352",
        itemName:
          "【3980円以上送料無料】実装で学ぶフルスタックWeb開発　エンジニアの視野と知識を広げる「一気通貫」型ハンズオン／佐藤大輔／著　伊東直喜／著　上野啓二／著",
        itemPrice: 3630,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 3630,
        itemPriceMax2: 3630,
        itemPriceMax3: 3630,
        itemPriceMin1: 3630,
        itemPriceMin2: 3630,
        itemPriceMin3: 3630,
        itemUrl:
          "https://item.rakuten.co.jp/tc-books/book_34552299/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/tc-books/cabinet/405/34552299.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 1,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "tc-books",
        shopName: "トップカルチャーBOOKSTORE",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/tc-books/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/tc-books/cabinet/405/34552299.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "　",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209112",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "著者谷拓樹(著)出版社インプレス発売日2014年08月ISBN9784844336358ページ数215Pキーワードうえぶせいさくしやのためのしーえすえすせつけい ウエブセイサクシヤノタメノシーエスエスセツケイ たに ひろき タニ ヒロキ9784844336358内容紹介予測しやすい、保守しやすい、最利用しやすい、拡張しやすい—コンポーネントやCSSプリプロセッサを意識した設計・管理の実践など、「ちゃんとCSSを書く」ためのプロの考え方を徹底解説！※本データはこの商品が発売された時点の情報です。目次第1章 CSSにおける設計とは/第2章 CSSの基本を振り返る/第3章 コンポーネント設計のアイデア/第4章 コンポーネント設計の実践/第5章 CSSプリプロセッサを用いた設計と管理/第6章 コンポーネントの運用に必要なツール/第7章 Web Componentsの可能性",
        itemCode: "booxstore:11337548",
        itemName:
          "Web制作者のためのCSS設計の教科書 モダンWeb開発に欠かせない「修正しやすいCSS」の設計手法／谷拓樹【3000円以上送料無料】",
        itemPrice: 2420,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 2420,
        itemPriceMax2: 2420,
        itemPriceMax3: 2420,
        itemPriceMin1: 2420,
        itemPriceMin2: 2420,
        itemPriceMin3: 2420,
        itemUrl:
          "https://item.rakuten.co.jp/booxstore/bk-4844336355/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/booxstore/cabinet/00592/bk4844336355.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 1,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "booxstore",
        shopName: "bookfan 1号店 楽天市場店",
        shopOfTheYearFlag: 1,
        shopUrl:
          "https://www.rakuten.co.jp/booxstore/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/booxstore/cabinet/00592/bk4844336355.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "",
        creditCardFlag: 1,
        endTime: "",
        genreId: "208738",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "&nbsp;&nbsp;&nbsp; Web開発者のための大規模サービス技術入門 単行本 の詳細 成長し続けるWebサービスが簡単には処理できない規模のデータに直面したとき、どう捌くのか。システムをダウンさせないために必要となる知識を多方面にわたって解説する。はてなインターンシップの講義をもとに書籍化。 カテゴリ: 中古本 ジャンル: 女性・生活・コンピュータ ホームページ・インターネット 出版社: 技術評論社 レーベル: WEB＋DB　PRESS　plusシリーズ 作者: 伊藤直也 カナ: ウェブカイハツシャノタメノダイキボサービスギジュツニュウモン / イトウナオヤ サイズ: 単行本 ISBN: 9784774143071 発売日: 2010/08/01 関連商品リンク : 伊藤直也 技術評論社 WEB＋DB　PRESS　plusシリーズ",
        itemCode: "renet3:10491867",
        itemName: "【中古】Web開発者のための大規模サービス技術入門 / 伊藤直也",
        itemPrice: 171,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 171,
        itemPriceMax2: 171,
        itemPriceMax3: 171,
        itemPriceMin1: 171,
        itemPriceMin2: 171,
        itemPriceMin3: 171,
        itemUrl:
          "https://item.rakuten.co.jp/renet3/0011154123/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/renet3/cabinet/item_photo/001115/4/0011154123.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 1,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "renet3",
        shopName: "ネットオフ楽天市場支店",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/renet3/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/renet3/cabinet/item_photo/001115/4/0011154123.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209118",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "長谷川裕一，麻野耕一，伊藤清人，岩永寿来，大野渉【著】販売会社/発売会社：技術評論社/技術評論社発売年月日：2007/01/25JAN：9784774130002",
        itemCode: "bookoffonline:11287009",
        itemName:
          "【中古】 Spring　2．0入門 Java・オープンソース・Web開発自由自在／長谷川裕一，麻野耕一，伊藤清人，岩永寿来，大野渉【著】",
        itemPrice: 220,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 220,
        itemPriceMax2: 220,
        itemPriceMax3: 220,
        itemPriceMin1: 220,
        itemPriceMin2: 220,
        itemPriceMin3: 220,
        itemUrl:
          "https://item.rakuten.co.jp/bookoffonline/0015528845/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/232/0015528845l.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 1,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "bookoffonline",
        shopName: "ブックオフ 楽天市場店",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/bookoffonline/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/232/0015528845l.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy: "",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209118",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "末次章(著者)販売会社/発売会社：日経BP社発売年月日：2017/01/01JAN：9784822296537",
        itemCode: "bookoffonline:14988266",
        itemName:
          "【中古】 Angular2によるモダンWeb開発　TypeScriptを使った基本プログラミング／末次章(著者)",
        itemPrice: 220,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 220,
        itemPriceMax2: 220,
        itemPriceMax3: 220,
        itemPriceMin1: 220,
        itemPriceMin2: 220,
        itemPriceMin3: 220,
        itemUrl:
          "https://item.rakuten.co.jp/bookoffonline/0018817796/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/2246/0018817796l.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 1,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "bookoffonline",
        shopName: "ブックオフ 楽天市場店",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/bookoffonline/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/2246/0018817796l.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy:
          "【電子書籍なら、スマホ・パソコンの無料アプリで今すぐ読める！】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209117",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "＜p＞サーバを単に増やすだけでは解決しない（?!）。大規模サービスの難所は，サービスの成長に伴い巨大化するデータの処理です。データ量の変化は緩やかには推移せず，突然目の前に現れる大規模化の壁。そこで求められるのは，いかにして「データを小さく持つか」「複数サーバに分散させるか」「最小限の回数で読み取るか」といった地道な取り組みの積み上げです。本書では Web開発における大規模サービスの一つの関門，数十〜数百ギガバイトのテキストデータを想定し，データ構造，メモリ，OS，DB，サーバ/インフラと広範なレイヤに及ぶ攻略ポイントをまとめて解説します。はてなインターンシップの初書籍化。＜/p＞画面が切り替わりますので、しばらくお待ち下さい。 ※ご購入は、楽天kobo商品ページからお願いします。※切り替わらない場合は、こちら をクリックして下さい。 ※このページからは注文できません。",
        itemCode: "rakutenkobo-ebooks:17810389",
        itemName:
          "［Web開発者のための］大規模サービス技術入門 ーデータ構造，メモリ，OS，DB，サーバ/インフラ【電子書籍】[ 伊藤直也 ]",
        itemPrice: 2838,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 2838,
        itemPriceMax2: 2838,
        itemPriceMax3: 2838,
        itemPriceMin1: 2838,
        itemPriceMin2: 2838,
        itemPriceMin3: 2838,
        itemUrl:
          "https://item.rakuten.co.jp/rakutenkobo-ebooks/b21e314785b23d8d9b9e450b9a58fc17/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/3376/2000006873376.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "rakutenkobo-ebooks",
        shopName: "楽天Kobo電子書籍ストア",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/rakutenkobo-ebooks/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/3376/2000006873376.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
    {
      Item: {
        affiliateRate: 3,
        affiliateUrl: "",
        asurakuArea: "",
        asurakuClosingTime: "",
        asurakuFlag: 0,
        availability: 1,
        catchcopy:
          "【電子書籍なら、スマホ・パソコンの無料アプリで今すぐ読める！】",
        creditCardFlag: 1,
        endTime: "",
        genreId: "209118",
        giftFlag: 0,
        imageFlag: 1,
        itemCaption:
          "＜p＞＜strong＞（概要）＜/strong＞＜br /＞ ＜strong＞世界累計50万部のベストセラー『Python Crash Course』待望の翻訳版が登場！＜/strong＞＜br /＞ 10歳の小学生から定年世代まで、世界中の読者が学んだプログラミング入門書で、あなたもPythonの基本をしっかり学びましょう。本書は世界の中学、高校、大学でもテキストとして利用されており、この本で得た知識をもとに新しい仕事に就いたり、副業をスタートさせたりしている人たちが世界中にいます。＜br /＞ 本書「実践編」では、「エイリアン侵略ゲーム」「データの可視化」「Webアプリケーション」という3つのプロジェクトにチャレンジします。次第に難易度のあがるシューティングゲーム作りを通じて、2Dゲームの開発ができるようになり、大量のデータを調査し、可視化するデータサイエンスのための必須知識を身に付け、そしてWebアプリケーション開発ではアカウントを作成し日記を記入、ログとして保管できるプログラム作成を習得します。「必修編」で学んだ方はもちろん、Pythonの基礎を学んでより実践的な知識を習得したい方も必読です。＜/p＞ ＜p＞＜strong＞（こんな方におすすめ）＜/strong＞＜br /＞ ・Pythonをゼロから学びたい人＜br /＞ ・実践的なPython開発の知識を短期間で習得したい人＜br /＞ ・プログラミングのしっかりした知識をはじめから身につけたい人＜/p＞ ＜p＞＜strong＞（目次）＜/strong＞＜br /＞ ＜strong＞プロジェクト1● エイリアン侵略ゲーム＜/strong＞＜br /＞ ＜strong＞第1章　弾を発射する宇宙船＜/strong＞＜br /＞ 　プロジェクトの計画を立てる＜br /＞ 　Pygameをインストールする＜br /＞ 　ゲームのプロジェクトを開始する＜br /＞ 　宇宙船の画像を追加する＜br /＞ 　Shipクラスを作成する＜br /＞ 　宇宙船を画面に描画する＜br /＞ 　リファクタリング:_check_events() と _update_screen() メソッド＜br /＞ 　宇宙船を操縦する＜br /＞ 　振り返り＜br /＞ 　弾を発射する＜br /＞ 　まとめ＜br /＞ ＜strong＞第2章　エイリアン!＜/strong＞＜br /＞ 　プロジェクトをレビューする＜br /＞ 　最初のエイリアンを生成する＜br /＞ 　エイリアンの艦隊を編成する＜br /＞ 　艦隊を動かす＜br /＞ 　エイリアンを撃つ＜br /＞ 　ゲームを終了する＜br /＞ 　まとめ＜br /＞ ＜strong＞第3章　得点を表示する＜/strong＞＜br /＞ 　Playボタンを追加する＜br /＞ 　ゲームをリセットする＜br /＞ 　レベルアップする＜br /＞ 　得点を表示する＜br /＞ 　まとめ＜br /＞ ＜strong＞プロジェクト2● データの可視化＜/strong＞＜br /＞ ＜strong＞第4章　データを生成する＜/strong＞＜br /＞ 　Matplotlibをインストールする＜br /＞ 　簡単な折れ線グラフを描画する＜br /＞ 　ランダムウォーク＜br /＞ 　Plotly でサイコロを転がす＜br /＞ 　まとめ＜br /＞ ＜strong＞第5章　データをダウンロードする＜/strong＞＜br /＞ 　CSV ファイル形式＜br /＞ 　地球全体のデータセットを地図に描画する(JSON 形式)＜br /＞ 　まとめ＜br /＞ ＜strong＞第6章　API を取り扱う＜/strong＞＜br /＞ 　Web API を使う＜br /＞ 　Plotly を使ってリポジトリを可視化する＜br /＞ 　Hacker News の API＜br /＞ 　まとめ＜br /＞ ＜strong＞プロジェクト3●Web アプリケーション＜/strong＞＜br /＞ ＜strong＞第7章　Django をはじめる＜/strong＞＜br /＞ 　 プロジェクトの準備をする＜br /＞ 　 アプリケーションを開始する＜br /＞ 　 ページを作成する:学習ノートのホームページ＜br /＞ 　 追加のページを作成する＜br /＞ 　 まとめ＜br /＞ ＜strong＞第8章　ユーザーアカウント＜/strong＞＜br /＞ 　ユーザーがデータを入力できるようにする＜br /＞ 　ユーザーアカウントを設定する＜br /＞ 　ユーザーが自分のデータを持てるようにする＜br /＞ 　まとめ＜br /＞ ＜strong＞第9章　アプリケーションの スタイル設定とデプロイ＜/strong＞＜br /＞ 「学習ノート」にスタイルを設定する＜br /＞ 「学習ノート」をデプロイする＜br /＞ まとめ＜br /＞ ＜strong＞付録＜/strong＞＜br /＞ 　A バージョン管理にGitを使う＜br /＞ 　B Matplotlibに日本語フォントを設定する＜/p＞画面が切り替わりますので、しばらくお待ち下さい。 ※ご購入は、楽天kobo商品ページからお願いします。※切り替わらない場合は、こちら をクリックして下さい。 ※このページからは注文できません。",
        itemCode: "rakutenkobo-ebooks:19463142",
        itemName:
          "最短距離でゼロからしっかり学ぶ Python入門　実践編　〜ゲーム開発・データ可視化・Web開発【電子書籍】[ Eric Matthes【著】 ]",
        itemPrice: 3630,
        itemPriceBaseField: "item_price_min3",
        itemPriceMax1: 3630,
        itemPriceMax2: 3630,
        itemPriceMax3: 3630,
        itemPriceMin1: 3630,
        itemPriceMin2: 3630,
        itemPriceMin3: 3630,
        itemUrl:
          "https://item.rakuten.co.jp/rakutenkobo-ebooks/5f2729ab4243368d8c0aaac5dc7eecda/?rafcid=wsc_i_is_1006740518069790219",
        mediumImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/8502/2000008858502.jpg?_ex=128x128",
          },
        ],
        pointRate: 1,
        pointRateEndTime: "",
        pointRateStartTime: "",
        postageFlag: 0,
        reviewAverage: 0,
        reviewCount: 0,
        shipOverseasArea: "",
        shipOverseasFlag: 0,
        shopAffiliateUrl: "",
        shopCode: "rakutenkobo-ebooks",
        shopName: "楽天Kobo電子書籍ストア",
        shopOfTheYearFlag: 0,
        shopUrl:
          "https://www.rakuten.co.jp/rakutenkobo-ebooks/?rafcid=wsc_i_is_1006740518069790219",
        smallImageUrls: [
          {
            imageUrl:
              "https://thumbnail.image.rakuten.co.jp/@0_mall/rakutenkobo-ebooks/cabinet/8502/2000008858502.jpg?_ex=64x64",
          },
        ],
        startTime: "",
        tagIds: [],
        taxFlag: 0,
      },
    },
  ];
  const [items, setItems] = useState([]); // データを管理する状態
  const [searchTerm, setSearchTerm] = useState(""); // 初期検索キーワード
  const [isLoading, setIsLoading] = useState(true); // ローディング状態
  const [error, setError] = useState(null); // エラーメッセージ管理

  // API からデータを取得する関数
  const fetchItems = async (keyword:string) => {
    try {
      setIsLoading(true); // ローディングを開始
      const response = await fetch(
        `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&keyword=${keyword}&applicationId=1006740518069790219`
      );
      if (!response.ok) throw new Error("データの取得に失敗しました");
      const data = await response.json();
      setItems(data.Items); // データを state に保存
    } catch (error:any) {
      console.error(error)
      setError(error.message); // エラーを state に保存
    } finally {
      setIsLoading(false); // ローディングを終了
    }
  };

  // コンポーネントの初回マウント時にデータ取得
  useEffect(() => {
    console.log("useEffect");
    fetchItems("web開発");
  }, [""]);

  const handleSubmit = (e) => {
    e.preventDefault(); // ページリロードを防ぐ
    fetchItems(searchTerm); // 検索実行
  };
  return (
    <div className="container mx-auto max-w-[1000px] p-4">
      {/* 検索バー */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Search items..."
          className="border border-gray-300 rounded-md p-2 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      {/* ローディング中の表示 */}
      {isLoading && <p className="text-center">Loading...</p>}

      {/* エラーがある場合の表示 */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* アイテムのリスト */}
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <div key={index} className="w-40">
            <a href={item.Item.shopUrl}>
              {item.Item.mediumImageUrls[0].imageUrl&&<Image
                src={item.Item.mediumImageUrls[0].imageUrl}
                alt={item.Item.itemName}
                width={128}
                height={128}
              />}
              <h2 className="text-center text-sm mt-2">
                {item.Item.itemName}
              </h2>
            </a>
          </div>
        ))}
      </div>

      {/* 該当するアイテムがない場合のメッセージ */}
      {items.length === 0 && !isLoading && !error && (
        <p className="text-center text-gray-500 mt-4">No items found</p>
      )}
    </div>
  );
}