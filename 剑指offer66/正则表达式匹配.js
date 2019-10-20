function matchCore(s, is, pattern, ipattern){
  if(is == s.length && ipattern == pattern.length) return true;
  if(is != s.length && ipattern == pattern.length) return false;
  if(pattern[ipattern+1] == '*'){
    if(pattern[ipattern] == s[is] || (pattern[ipattern] == '.' && is != s.length)){
      return matchCore(s, is+1, pattern, ipattern+2) || matchCore(s, is, pattern, ipattern+2) || matchCore(s, is+1, pattern, ipattern);
    }
      return matchCore(s, is, pattern,ipattern+2);
  }
  if(pattern[ipattern] == s[is] || (pattern[ipattern] == '.' && is != s.length)){
    return matchCore(s, is+1, pattern, ipattern+1);
  }
  return false;
}

function match(s, pattern)
{
  if(s == null || pattern == null) return false;
  return matchCore(s, 0, pattern, 0);
}