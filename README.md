# style-loader
like style-loader，but only support inject

## usage
just like style-loader
```
{
    test: /\.css$/,
    use: [
        {
            loader: 'style-loader'
        },
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1
            },
        },
        'postcss-loader'
    ]
}
```