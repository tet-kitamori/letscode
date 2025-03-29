# **About Markdown:'**.md'ドキュメントについて\*\*

Markdown は、プレーンテキストでドキュメントを手早く書いて
残したいときによく使われる記法です。

- 文章作りを仕事とするライター
- IT 系のエンジニア
- Web デザイナ
- ブログ配信者

のような人たちが利用しているようです。
Linux 系のプログラムには、よく'ReadMe.md'がついています。

## １．基本の Markdown

**見出し**は'# '(見出し１)、'## '(見出し２)、'### '(見出し３),...
というように、'#'を行の先頭に書きます。
'#'の数が多いほど、文字が小さくなります。 ' '(スペース)は必須です。

### 見出し３です

#### 見出し４です

##### 見出し５です

**太字は**は、'\*\*'ではさみます。

**箇条書き**は、'\* 箇条書き'(HTML の UL)

- 項目１
- 項目２

**番号付きの箇条書き**は、'1. 箇条書き 1'、'2. 箇条書き 2'、...とします。

1. 番号付き項目１
2. 番号付き項目２

## **水平線**は、'---'

**リンク**を張るには、'[リンク名](リンク先)'

[Yahoo!](https://www.yahoo.co.jp)

**イメージファイルの取り込み**などには、'![代替テキスト](ファイル名)'

![桜だよ](images/sakura.jpg)

## ２．箇条書きの詳細

箇条書きに使うのは、'\*' だけではなく '-', '+' も OK です。

- リスト項目１
- リスト項目２

* リスト項目３
* リスト項目４

行の最初に' '(スペース)を挿入することで、箇条書きを段付きにできます。

- リスト項目１
  - リスト項目１－１
  - リスト項目１－２
- リスト項目２
  - リスト項目２－１
    - リスト項目２－１－１
- リスト項目２－２

## ３．番号付き箇条書きの詳細

番号付き箇条書きでは、行頭の番号がなんでも順番に番号が振られるのですが、気持ち悪いので、行儀よく順番に番号を振っていくのが推奨されます。

番号付きの箇条書きでも、段付きにできますが、段付き表示にするには、上の段の項目の書き始めの位置に番号が来るようにスペースを調整する。

1. リスト項目１
   1. リスト項目１－１（多分 OK）
   2. リスト項目１－２（これも多分 OK）
2. リスト項目１－３（多分 NG）
3. リスト項目２

## ４．ソースコードを書く場合

ドキュメントの中で、ソースコードの説明をしようとすると、Markdown の
制御のためのコードが現れると表示が乱れてしまうので、それを避けるためにコード記法を使います。

### 地の文に短いソースコードを埋め込む

埋め込みたいソースコードを '`'(バッククオート：Windows だと'shift'+'@')で囲みます。

こんな感じ　`console.log("**太字じゃない**")`　です。

### コードブロックをまとめて埋め込む

コードブロックをまとめて埋め込むには、バッククオートを３つ続けて打ちます。

```
const c1 = new Circle(50);  // Create Object C1
console.log(c1.area);       // use getter

c1.area = 100;              // use setter
console.log(c1.rad);
```

コードブロックの各行の先頭に、半角スペースを４こつけても同じことができます。

## ５．GFM (GitHub Flavored Markdown)

GitHubはソースコードを共有するWebサービスですが、ソースコードの説明用のドキュメントはたいていMarkdownを用いて作られています。
説明がしやすいように、または、見栄えを良くするためにGFMと呼ばれる拡張記法が利用できます。

### 表記法

GFM では表が作れます。

|項番（中央寄せ）|品名（左寄せ）|単価（右寄せ）|
|:-------:|------|------:|
| 1 | バナナ | 280 |
| 2 | 晩白柚 | 620 |
| 3 | キャベツ | 350 |

### 打消し線

チルダ '~'２個ではさめば、はさまれたテキストには打消し線がつきます。

プログラミングは~~苦痛~~楽しいです。

### コードブロックの色付け

コードブロックの埋め込みの際に、言語識別子を付加する事で色付けがされてソースコードを理解しやすくなります。

```html
<body>
    <h1 id="title">HTMLの基礎</h1>
    <h2>BMIの計算</h2>
    体重(kg):<input id="weight" /><br />
    身長(m):<input id="height" /><br />
    計算：<button onclick="calc()">計算</button>
    <p id="result"></p>
</body>
```

### 数式の表示

数式の表現には、MathJax と呼ばれるライブラリが使われる。

| 項目 | 記法 | 記述例 | 表示 |
|--------|--------------|------------------------|------------|
| 加算 | + | `a + b` | a + b |
| 減算 | - | `a - b` | a - b |
| 乗算 | `\times` | `a \times b` | a \times b |
| 乗算 | `\cdot` | `a \cdot b` | a \cdot b |
| 除算 | `\div` | `a \div b` | a \div b |
| 除算 | / | `a / b` | a / b |
| 累乗 | ^ | `x^3` | x^3 |
| 階乗 | ! | `n!` | n! |
| 平方根 | `\sqrt` | `\sqrt{2}` | \sqrt{2} |
| 累乗根 | `\sqrt[n]` | `\sqrt[3]{2}` | \sqrt[3]{2} |
| 下付き文字 | _ | `x_i` | x_i |
| プラスマイナス | `\pm` | `\pm 3` | \pm 3 |
| 分数 | `\frac` | `\frac{1}{x+2}` | \frac{1}{x+2} |
| 分数大 | `\dfrac` | `\dfrac{1}{x+2}` | \dfrac{1}{x+2} |
| 括弧 | `\left( \right)` | `\left( \dfrac{1}{x+2} \right)^2` | \left( \dfrac{1}{x+2} \right)^2 |
|--------|--------------|------------------------|------------|
| 循環小数 | `\dot` | `0.\dot{6}` | 0.\dot{6} |
| 無限小数 | `\ldots` | `\pi = 3.14\ldots` | \pi = 3.14\ldots |
| 無限大 | `\infty` | `\infty` | \infty |
|--------|--------------|------------------------|------------|
| 対数 | `\log` | `\log x` | \log x |
| 10の対数 | `\log_{10}` | `\log_{10} x` | \log_{10} x |
| 三角関数 | `\sin` | `\sin x \cos y \tan z`  | \sin x \cos y \tan z |
|--------|--------------|------------------------|------------|
| 不等号 | `\neq` | `x \neq y` | x \neq y |
| ほぼ等しい | `\fallingdotseq` | `x \fallingdotseq y` | x \fallingdotseq y |
| 大 | `\gt` | `x \gt y` | x \gt y |
| 以上 | `\geqq` | `x \geqq y` | x \geqq y |
| 小 | `\lt` | `x \lt y` | x \lt y |
| 以下 | `\leqq` | `x \leqq y` | x \leqq y |
| 非常に大 | `\gg` | `x \gg y` | x \gg y |
| 非常に小 | `\ll` | `x \ll y` | x \ll y |

#### 総和、総乗

総和は、`\sum_{i=1}^{n}x_i` とすると、\sum_{i=1}^{n}x_i

`\displaystyle \sum_{i=1}^{n}x_i` とすると、\displaystyle \sum_{i=1}^{n}x_i

 総乗は、`\plod_{i=1}^{n}x_i` とすると、 \plod_{i=1}^{n}x_i

 `\displaystyle \plod_{i=1}^{n}x_i` とすると、 \displaystyle \plod_{i=1}^{n}x_i

 #### 積分、極限

 積分は、`\int_{0}^{\infty} f(x) dx` とすると、\int_{0}^{\infty} f(x) dx

 `\displaystyle \int_{0}^{\infty} f(x) dx` とすると、\displaystyle \int_{0}^{\infty} f(x) dx

 極限は、`\lim_{x \to \infty} f(x)` とすると、\lim_{x \to \infty} f(x)

 `\displaystyle \lim_{x \to \infty} f(x)` とすると、\displaystyle \lim_{x \to \infty} f(x)

 #### 配列、行列

配列は、`\begin{array}{r1} abc & 1234 \\ def & 5678 \end{array}` とすると、
\begin{array}{r1} abc & 1234 \\ def & 5678 \end{array}

括弧で囲んだ行列は、`\begin{pmatrix} A & B \\ C & D \end{pmatrix}` とすると、
\begin{pmatrix} A & B \\ C & D \end{pmatrix}

カギ括弧で囲んだ行列は、`\begin{bmatrix} A & B \\ C & D \end{bmatrix}` とすると、
\begin{bmatrix} A & B \\ C & D \end{bmatrix}

行列式は、`\begin{vmatrix} A & B \\ C & D \end{vmatrix}` とすると、
\begin{vmatrix} A & B \\ C & D \end{vmatrix}

#### 方程式

方程式を並べて表示するのは、`\begin{eqnarray} a + b = c \\ a + d = e \end{eqnarray}`
\begin{eqnarray} a + b = c \\ a + d = e \end{eqnarray}

改行幅を調整するには、'\\'の後に、'[5px]'などと指定する。

連立方程式を表示するには、
```
\begin{eqnarray}
  \left{
    \begin{array}{l}
      x + 2y = 124 \\
      2x + 5y = 286
    \end{array}
  \right.
\end{eqnarray}
```
\begin{eqnarray}
  \left{
    \begin{array}{l}
      x + 2y = 124 \\
      2x + 5y = 286
    \end{array}
  \right.
\end{eqnarray}

### フォント、文字

| 項目 | 記法 | 記述例 | 表示 |
|--------|--------------|------------------------|------------|
| フォント色 | `\color` | `\color{red}{x + y}`  | \color{red}{x + y} |
| 背景色 | `\colorbox` | `\colorbox{green}{x + y}` | \colorbox{green}{x + y} |
| 文字大 | `\large` | `\large{XYZ}` | \large{XYZ} |
| 文字普通 | `\normalsize` | `\normalsize{XYZ}` | \normalsize{XYZ} |
| 文字小 | `\small` | `\small{XYZ}` | \small{XYZ} |
| 文字極小 | `\scriptsize` | `\scriptsize{XYZ}` | \scriptsize{XYZ} |
| ローマン | `\mathrm` | `\mathrm{XYZ}` | \mathrm{XYZ} |
| 太字 | `\mathbf` | `\mathbf{XYZ}` | \mathbf{XYZ} |
| イタリック | `\mathit` | `\mathit{XYZ}` |\mathit{XYZ} |
| 中抜き | `\mathbb` | `\mathbb{XYZ}` | \mathbb{XYZ} |
|--------|--------------|------------------------|------------|
| アルファ | `\alpha` | `\alpha` | \alpha |
| ベータ | `\beta` | `\beta` | \beta |
| ガンマ | `\gamma` | `\gamma` | \gamma |
| デルタ | `\delta` | `\delta` | \delta |
| イプシロン | `\varepsilon` | `\varepsilon` | \varepsilon |
| ゼータ | `\zeta` | `\zeta` | \zeta |
| イータ | `\eta` | `\eta` | \eta |
| シータ | `\theta` | `\theta` | \theta |
| ラムダ | `\lambda` | `\lambda` | \lambda |
| ミュー | `\mu` | `\mu` | \mu |
| ニュー | `\nu` | `\nu` | \nu |
| グザイ | `\xi` | `\xi` | \xi |
| パイ | `\pi` | `\pi` | \pi |
| ロー | `\rho` | `\rho` | \rho | 
| シグマ | `\sigma` | `\sigma` | \sigma |
| タウ | `\tau` | `\tau` | \tau | 
| ユプシロン | `\upsilon` | `\upsilon` | \upsilon | 
| ファイ | `\phi` | `\phi` | \phi |
| ファイ | `\varphi` | `\varphi` | \varphi |
| カイ | `\chi` | `\chi` | \chi |
| プサイ | `\psi` | `\psi` | \psi |
| オメガ | `\omega` | `\omega` | \omega |
