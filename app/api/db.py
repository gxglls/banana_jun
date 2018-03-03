from blog import logging
def get_article_list_by_tag(cursor,tag):
    sql="select title,title_en from article where type='%s'" % tag
    cursor.execute(sql)
    data = cursor.fetchall() 
    result=[]
    for i in data:
        result.append(i)
    return result

def get_comment_list_by_title_en(cursor,titleEn):
    sql="select user,content,clock from comment where title_en='%s' order by clock desc" % titleEn
    cursor.execute(sql)
    data = cursor.fetchall() 
    result=[]
    for i in data:
        result.append(i)
    return result

def insert_comment_by_title_en(blogDB,cursor,fd):
    print fd['comment']
    print fd['username']
    print fd['titleEn']
    sql="insert into comment(content,clock,user,title_en) values('%s',%s,'%s','%s')" % (fd['comment'],"now()",fd['username'],fd['titleEn'])
    print sql
    try:
        cursor.execute(sql)
        blogDB.commit()
        return 0
    except Exception as e:
        blogDB.rollback()
        return e

def get_praise_by_title_en(cursor,titleEn):
    sql="select count(titleEn) from praise where titleEn='%s'" % titleEn
    cursor.execute(sql)
    return cursor.fetchone()[0]

def add_praise_by_title_en(blogDB,cursor,titleEn,ip):
    testSql="select '%s' from praise"
    if cursor.execute(testSql)==0:
        sql="insert into praise(ip,titleEn) values('%s','%s')" % (ip,titleEn)
        try:
            cursor.execute(sql)
            blogDB.commit()
            return get_praise_by_title_en(cursor,titleEn)
        except Exception as e:
            blogDB.rollback()
            return e
    else:
        return "done"
