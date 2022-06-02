import React from 'react';
import type { Language } from 'prism-react-renderer';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { useCopy } from 'dumi/theme';
import codeTheme from '../config/codeTheme'
import 'prismjs/themes/prism.css';
import './SourceCode.less';

/**
 * define DSL which can be highlighted as similar language
 */
const SIMILAR_DSL = {
  acss: 'css',
  axml: 'xml',
};

export interface ICodeBlockProps {
  code: string;
  lang: Language;
  showCopy?: boolean;
}

export default ({ code, lang, showCopy = true }: ICodeBlockProps) => {
  const [copyCode, copyStatus] = useCopy();

  return (
    <div className="sp-code-block">
      <Highlight
        {...defaultProps}
        code={code}
        language={SIMILAR_DSL[lang] || lang}
        theme={codeTheme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {showCopy && (
              <button
                className="sp-icon sp-code-block-copy-btn"
                data-status={copyStatus}
                onClick={() => copyCode(code)}
              />
            )}
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};
