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
